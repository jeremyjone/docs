# RabbitMQ 的使用

`RabbitMQ` 是使用 `Erlang` 编写的开源消息队列，支持多种协议，非常适合企业及开发。

## 安装

`RabbitMQ` 使用 `Erlang` 编写，所以在安装之前需要首先安装 `Erlang` 环境。

`Erlang`： [下载地址](https://www.erlang.org/downloads)
`RabbitMQ`：[下载地址](https://github.com/rabbitmq/rabbitmq-server/releases)

全部下载最新稳定版即可。

下载并安装之后，需要配置管理界面。通过命令直接启用即可：

```bat
rabbitmq-plugins ebable rabbitmq_management
```

如果没有配置环境变量，可以进入安装目录下的 `/sbin` 文件夹中执行，如图：

<img :src="$withBase('/assets/roadmap/dotnet/mq/rabbitmq_management.png')" alt="配置 RabbitMQ 界面">

::: tip 建议
建议将安装路径下的 `/sbin` 路径添加到环境变量中，以便后续使用命令。
:::

::: tip 提示
`RabbitMQ` 默认监听端口为 `5672`。而管理后台的端口则是 `15672`，所以启用管理之后，可以通过浏览器访问：`http://localhost:15672/`
:::

## 配置

### 添加用户

通过命令可以快速管理用户：

```bash
# 查看用户列表
rabbitmqctl list_users

# 添加用户
# rabbitmqctl add_user <username> <password>
rabbitmqctl add_user admin qaz123

# 设置权限
# rabbitmqctl set_permissions [-p <vhost>] <username> <configuration> <write> <read>
rabbitmqctl set_permissions -p "/" admin ".*" ".*" ".*"

# 设置用户标签
rabbitmqctl set_user_tags admin administrator

# 通常删除默认账户
rabbitmqctl delete_user guest

# 管理账户
# 1、修改密码
rabbitmqctl change_password <username> <newpassword>

# 2、清除密码（无法使用密码登录）
rabbitmqctl clear_password <username>

# 3、清除用户权限（拒绝指定用户访问指定主机）
rabbitmqctl clear_permissions [-p <vhost>] <username>
```

::: tip 提示
更多命令行内容，可以参考[官方文档](https://www.rabbitmq.com/man/rabbitmqctl.8.html#)。
:::

经过上面的命令，可以在管理界面看到发生了变化。当然，如果你已经通过 `guest` 登录且已经在命令行中将其删除，界面会提示你登录失败并尝试让你重新登录。

<img :src="$withBase('/assets/roadmap/dotnet/mq/rabbitmq_users.png')" alt="用户列表">

## 使用

针对不同的使用方式，[官方文档](https://www.rabbitmq.com/getstarted.html) 给出了不错的示例。下面介绍基本的使用方式。

::: tip 示例代码
具体代码可以看 [示例代码](https://github.com/jeremyjone/dotnet-study-road/tree/master/MicroService/MQ/RabbitMQ)
:::

### 创建一个生产者

创建一个控制台项目，并安装 `RabbitMQ.Client` 包。在主函数中直接创建即可：

```csharp
// 创建连接
using var connection = RabbitMQFactory.Create();
// 创建通道
using var channel = connection.CreateModel();

// 1、声明交换机
channel.ExchangeDeclare("", ExchangeType.Direct, true, false, null);
// 2、声明队列
channel.QueueDeclare("queue", false, false, false, null);
// 3、绑定
channel.QueueBind("queue", "", "queue");

// 循环发送50个消息到 RabbitMQ
const string message = "Producer RabbitMQ Message";
for (var i = 0; i < 50; i++)
{
    var body = Encoding.UTF8.GetBytes($"{message}-{i}");
    // 发送消息到队列
    channel.BasicPublish("", "queue", null, body);
    Console.WriteLine($"发布消息 {message}-{i} 到队列。");
}
```

如果你已经开启了 `RabbitMQ`，此时运行该生产者之后，消息会保存到消息队列中：

<img :src="$withBase('/assets/roadmap/dotnet/mq/rabbitmq_queue_basic.png')" alt="消息保存">

### 创建一个消费者

新创建一个控制台项目，同样安装 `RabbitMQ.Client` 包。在主函数中直接创建即可：

```csharp
// 创建连接
using var connection = RabbitMQFactory.Create();
// 创建通道
using var channel = connection.CreateModel();

// 声明队列
channel.QueueDeclare("queue", false, false, false, null);

// 创建基于事件的消费者
var consumer = new EventingBasicConsumer(channel);
consumer.Received += (model, ea) =>
{
    var message = Encoding.UTF8.GetString(ea.Body.ToArray());
    Console.WriteLine($"收到消息：{message}");
};
channel.BasicConsume("queue", true, consumer);
```

运行之后，可以消费所有队列中的数据：

<img :src="$withBase('/assets/roadmap/dotnet/mq/rabbitmq_queue_consumer.png')" alt="消费队列">

### 消息持久化

上面的内容，一旦 `RabbitMQ` 失效了，数据就会丢失。如何做到数据持久化呢，需要如下配置：

```csharp{6,7,15}
using var connection = RabbitMQFactory.Create();
using var channel = connection.CreateModel();
channel.QueueDeclare("queue", false, false, false, null);

// 消息持久化
var properties = channel.CreateBasicProperties();
properties.Persistent = true;

// 循环发送50个消息到 RabbitMQ
const string message = "Producer RabbitMQ Message";
for (var i = 0; i < 50; i++)
{
    var body = Encoding.UTF8.GetBytes($"{message}-{i}");
    // 发送消息到队列。将上面创建的属性添加进来
    channel.BasicPublish("", "queue", properties, body);
    Console.WriteLine($"发布消息 {message}-{i} 到队列。");
}
```

### 继续

上面是一个最基本的使用方式。在 [官方指导教程](https://www.rabbitmq.com/getstarted.html) 中，包含了包括上面方式的共 7 中模式，其中前 5 中是比较常用的，尤其是第 3、4、5，分别是：

- fanout 发布/订阅模式

  > 即：生产者发送一个消息无差别地到所有消息队列，所有消费者都可以通过消息队列获取该消息。

- direct 精准推送模式

  > 即：生产者指定队列的 `KEY` 值，精确推送到指定的队列中，所有可以读取该队列的消费者都可以获取该消息。

- topic 主题模式

  > 即：生产者可以根据一定规则指定队列的 `KEY` 值，模糊匹配队列并推送消息到队列中，所有可以读取该队列的消费者都可以获取该消息。

将基本代码贴出来，具体代码可以参照我的 [文档配套代码库](https://github.com/jeremyjone/dotnet-study-road/tree/master/MicroService/MQ/RabbitMQ)

#### 生产者

```csharp
// 发布订阅模式
public static void Fanout()
{
    const string exchangeName = "fanout_exchange";
    const string queueName1 = "fanout_queue1";
    const string queueName2 = "fanout_queue2";
    const string queueName3 = "fanout_queue3";
    using var connection = RabbitMQFactory.Create();
    using var channel = connection.CreateModel();

    // 声明交换机
    channel.ExchangeDeclare(exchangeName, ExchangeType.Fanout);

    // 声明3个队列
    channel.QueueDeclare(queueName1, false, false, false, null);
    channel.QueueDeclare(queueName2, false, false, false, null);
    channel.QueueDeclare(queueName3, false, false, false, null);

    // 将队列绑定到交换机。不写 routingKey，意味着消息将发送到所有队列
    channel.QueueBind(queueName1, exchangeName, "");
    channel.QueueBind(queueName2, exchangeName, "");
    channel.QueueBind(queueName3, exchangeName, "");

    // 循环发送100个消息到 RabbitMQ
    const string message = "Producer RabbitMQ Message";
    for (var i = 1; i <= 20; i++)
    {
        var body = Encoding.UTF8.GetBytes($"{message}-{i}");
        // 发送消息到交换机
        channel.BasicPublish(exchangeName, "", null, body);
        Console.WriteLine($"发布消息 {message}-{i} 到队列。");
    }
}

// 精准推送模式
public static void Direct()
{
    const string exchangeName = "direct_exchange";
    const string queueName1 = "direct_queue1";
    const string queueName2 = "direct_queue2";
    const string queueName3 = "direct_queue3";
    using var connection = RabbitMQFactory.Create();
    using var channel = connection.CreateModel();

    // 声明交换机
    channel.ExchangeDeclare(exchangeName, ExchangeType.Direct);

    // 声明3个队列
    channel.QueueDeclare(queueName1, false, false, false, null);
    channel.QueueDeclare(queueName2, false, false, false, null);
    channel.QueueDeclare(queueName3, false, false, false, null);

    // 将队列绑定到交换机。为了达到直发效果，需要填写 routingKey，会按照该 Key 值匹配发送
    channel.QueueBind(queueName1, exchangeName, "c");
    channel.QueueBind(queueName2, exchangeName, "cpp");
    channel.QueueBind(queueName3, exchangeName, "csharp");

    // 循环发送100个消息到 RabbitMQ
    const string message = "Producer RabbitMQ Message";
    for (var i = 1; i <= 20; i++)
    {
        var body = Encoding.UTF8.GetBytes($"{message}-{i}");

        var routingKeys = new[] {"c", "cpp", "csharp"};
        // 发送消息到交换机
        channel.BasicPublish(exchangeName, routingKeys[i % 3], null, body);
        Console.WriteLine($"发布消息 {message}-{i} 到队列。");
    }
}

// 主题模式
public static void Topic()
{
    const string exchangeName = "topic_exchange";
    const string queueName1 = "topic_queue1";
    const string queueName2 = "topic_queue2";
    const string queueName3 = "topic_queue3";
    using var connection = RabbitMQFactory.Create();
    using var channel = connection.CreateModel();

    // 声明交换机
    channel.ExchangeDeclare(exchangeName, ExchangeType.Topic);

    // 声明3个队列
    channel.QueueDeclare(queueName1, false, false, false, null);
    channel.QueueDeclare(queueName2, false, false, false, null);
    channel.QueueDeclare(queueName3, false, false, false, null);

    // 将队列绑定到交换机。Topic 模式下，绑定时可以填写模糊符号 "*" / "#"
    channel.QueueBind(queueName1, exchangeName, "data.*");
    channel.QueueBind(queueName2, exchangeName, "data.#");
    channel.QueueBind(queueName3, exchangeName, "data.update");

    // 循环发送100个消息到 RabbitMQ
    const string message = "Producer RabbitMQ Message";


    foreach (var key in new [] {"data.update", "data.insert", "data.insert.one"})
    {
        for (var i = 1; i <= 10; i++)
        {
            var body = Encoding.UTF8.GetBytes($"{message}-{i}");

            // 发送消息到交换机
            channel.BasicPublish(exchangeName, key, null, body);
            Console.WriteLine($"发布消息 {message}-{i} 到队列，Key 为 {key}。");
        }
    }
}
```

#### 消费者

```csharp
// 发布订阅模式
public static void Fanout()
{
    // 创建连接
    using var connection = RabbitMQFactory.Create();
    // 创建通道
    using var channel = connection.CreateModel();

    const string exchangeName = "fanout_exchange";
    const string queueName2 = "fanout_queue2";

    // 声明交换机
    channel.ExchangeDeclare(exchangeName, ExchangeType.Fanout);

    // 声明队列
    channel.QueueDeclare(queueName2, false, false, false, null);

    // 将队列绑定到交换机
    channel.QueueBind(queueName2, exchangeName, "");

    // 创建基于事件的消费者
    var consumer = new EventingBasicConsumer(channel);

    // 设置 prefetchCount
    channel.BasicQos(0, 1, false);
    consumer.Received += (model, ea) =>
    {
        var message = Encoding.UTF8.GetString(ea.Body.ToArray());
        Console.WriteLine($"收到消息：{message}");
    };

    // 消费第二个队列中的消息
    channel.BasicConsume(queueName2, true, consumer);
}

// 精准推送模式
public static void Direct()
{
    // 创建连接
    using var connection = RabbitMQFactory.Create();
    // 创建通道
    using var channel = connection.CreateModel();

    const string exchangeName = "direct_exchange";
    const string queueName1 = "direct_queue1";

    // 声明交换机
    channel.ExchangeDeclare(exchangeName, ExchangeType.Direct);

    // 声明队列
    channel.QueueDeclare(queueName1, false, false, false, null);

    // 将队列绑定到交换机
    channel.QueueBind(queueName1, exchangeName, "c");

    // 创建基于事件的消费者
    var consumer = new EventingBasicConsumer(channel);
    consumer.Received += (model, ea) =>
    {
        var message = Encoding.UTF8.GetString(ea.Body.ToArray());
        Console.WriteLine($"收到消息：{message}，key：{ea.RoutingKey}");
    };

    // 消费第一个队列中的消息
    channel.BasicConsume(queueName1, true, consumer);
}

// 主题模式
public static void Topic()
{
    // 创建连接
    using var connection = RabbitMQFactory.Create();
    // 创建通道
    using var channel = connection.CreateModel();

    const string exchangeName = "topic_exchange";
    const string queueName1 = "topic_queue1";

    // 声明交换机
    channel.ExchangeDeclare(exchangeName, ExchangeType.Topic);

    // 声明队列
    channel.QueueDeclare(queueName1, false, false, false, null);

    // 将队列绑定到交换机
    channel.QueueBind(queueName1, exchangeName, "data.delete");

    // 创建基于事件的消费者
    var consumer = new EventingBasicConsumer(channel);
    consumer.Received += (model, ea) =>
    {
        var message = Encoding.UTF8.GetString(ea.Body.ToArray());
        Console.WriteLine($"收到消息：{message}，key：{ea.RoutingKey}");
    };

    // 消费第一个队列中的消息
    channel.BasicConsume(queueName1, true, consumer);
}
```
