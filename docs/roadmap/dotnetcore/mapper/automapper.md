# AutoMapper

正如前文说的那样，对象映射就是将一个对象中的属性按照一定规则映射到另一个对象中。这个操作是枯燥重复的，所以就有了 `AutoMapper` 这样的对象映射器。

## 映射规则

- 目标对象属性必须匹配源对象的属性，除非你对一个新属性进行了自定义
- 在使用对象映射前，必须先配置映射关系
- 映射关系应该是唯一的
- 映射关系的配置顺序是无序的，因为它在初始化阶段就已经完成了所有的映射

对于目标类型的任何属性，如果源类型中不存在该属性，则执行以下查找顺序：

- 查找源类型上的方法
- 查找源类型上带有 `Get` 前缀的方法（[如果可用](#识别属性名的前后缀)）
- 将目标成员名称拆分为单个单词（按照 PascalCase 规则）后尝试按复杂类型深度查找（[如果可用](#展平)）
- 全不匹配，抛出错误

## 安装

在 `NuGet包管理器` 中搜索 `AutoMapper`，直接安装。

或者通过命令：

```sh
PM> Install-Package AutoMapper
```

## 基本使用

根据概述中的例子，做一个最基本的使用。

### 基本的配置方式

::: tip 示例代码
完整代码可以看 [示例代码](https://github.com/jeremyjone/dotnet-study-road/tree/master/ObjectMapper/ObjectMapper.Basic)
:::

首先创建用户模型 `User.cs`，然后创建用户信息模型 `UserDto.cs`。

```csharp
// User.cs
public class User
{
    public int Id { get; set; }
    public string Username { get; set; }
    public string Nickname { get; set; }
    public string Password { get; set; }
    public string Email { get; set; }
}

// UserDto.cs
public class UserDto
{
    public int Id { get; set; }
    public string Username { get; set; }
    public string Nickname { get; set; }
}
```

在主函数中创建映射规则：

```csharp
var config = new MapperConfiguration(cfg => cfg.CreateMap<User, UserDto>());
```

这样，就配置好了通过 `User` 对象得到一个 `UserDto` 对象的规则。

验证一下：

```csharp
config.AssertConfigurationIsValid();
```

可以通过测试。

### 配置多个规则

在配置中，可以配置多个规则，比如：

```csharp
var config1 = new MapperConfiguration(cfg =>
{
    cfg.CreateMap<User, UserDto>();
    cfg.CreateMap<User, UserEmailDto>();
});
```

然后就可以使用这两个映射规则了。

### 无效的映射

为了体验映射规则，创建一个具有新属性的对象 `ErrorUserDto.cs`：

```csharp
public class ErrorUserDto
{
    public int Id { get; set; }
    public string Username { get; set; }
    public string Nickname { get; set; }

    /// <summary>
    /// 源数据中没有该字段
    /// </summary>
    public string ErrorAttr { get; set; }
}
```

在主函数中创建一个新规则并验证：

```csharp
var config2 = new MapperConfiguration(cfg => cfg.CreateMap<User, ErrorUserDto>());
config2.AssertConfigurationIsValid();
```

此时运行程序会在验证行报错，说明配置无法正常映射，此时就需要自定义配置。

### 基本的使用方式

新建一个 `User` 对象实例，然后通过映射创建一个 `UserDto` 对象实例。

```csharp
var user = new User
{
    Id = 1,
    Username = "jeremyjone",
    Nickname = "Jeremy Jone",
    Email = "jeremyjone@qq.com",
    Password = "123456"
};

var mapper = new Mapper(config1);
var userDto = mapper.Map<UserDto>(user);

Console.WriteLine($"{userDto.Username}, {userDto.Nickname}"); // jeremyjone, Jeremy Jone
```

可以得到对应的内容。

## 配置

所有配置都是在 `MapperConfiguration` 实例中的构造函数中初始化并配置的。

通过 `CreateMap<Src, Dest>` 可以得到一个最基本的映射配置，它的：

- **左侧类型** 是源类型
- **右侧类型** 是目标类型

基本上后续所有配置都在这里面针对属性字段进行操作。

### 使用配置文件

当配置较多时，将配置按照类别拆分为多个文件是一种高效的方法。

在文件中创建一个映射配置类，其需要继承自 `AutoMapper` 提供的基础配置类 `Profile`，然后将配置内容放在构造函数中。

现在我们将上面的配置移动到配置文件中。新建一个 `UserProfile.cs` 文件：

```csharp
// UserProfile.cs
public class UserProfile:Profile
{
    public UserProfile()
    {
        CreateMap<User, UserDto>();
        CreateMap<User, UserEmailDto>();
    }
}
```

现在就不需要在 `MapperConfiguration` 中使用配置项，而是使用配置文件即可：

```csharp
var config3 = new MapperConfiguration(cfg => cfg.AddProfile<UserProfile>());
// or
var config3 = new MapperConfiguration(cfg => cfg.AddProfile(new UserProfile()));
```

还是使用上面的示例方式进行测试：

```csharp
// config.CreateMapper 与 new Mapper(config) 等效
var mapper3 = config3.CreateMapper();
var userDto3 = mapper3.Map<UserDto>(user);

Console.WriteLine($"{userDto3.Username}, {userDto3.Nickname}"); // jeremyjone, Jeremy Jone
```

可以得到同样的结果，说明配置已经成功。

#### 程序集自动扫描配置文件

很多时候我们不需要手动添加配置文件，让程序集自动扫描配置是更加简便的方式：

```csharp
var config4 = new MapperConfiguration(cfg => cfg.AddMaps(typeof(Program)));
// or 动态获取
var config4 = new MapperConfiguration(cfg => cfg.AddMaps("ObjectMapper.Basic"));
// or 数组形式
var config4 = new MapperConfiguration(cfg => cfg.AddMaps(new[] {typeof(Program)}));
```

这样做的好处是，不需要再一个一个手动添加，程序会自动扫描所有配置文件，自动加载，进一步简化了配置操作。

### 匹配属性可见性

默认情况下，`AutoMapper` 会尝试映射每个公共字段，可以通过配置修改：

```csharp
var configuration = new MapperConfiguration(cfg =>
{
    // 不应设任何字段
    cfg.ShouldMapField = f => false;

    // 映射公有或私有字段
    cfg.ShouldMapProperty = p =>
        p.GetMethod != null && (p.GetMethod.IsPublic || p.GetMethod.IsPrivate);

    // 映射公有或内部字段
    cfg.ShouldMapProperty = p => p.GetMethod.IsPublic || p.GetMethod.IsAssembly;
});
```

### 匹配属性名称

因为 `AutoMapper` 的匹配规则中必须匹配属性名称。但很多时候源名称与目标名称不匹配，此时除了根据属性字段单独配置外，还可以通过指定名称规则来解决该问题。

#### 属性命名规则

配置允许自定义源名称与目标名称。它有四个属性：

- 无（null，默认）
- 精准匹配
- 小写+下划线
- 帕斯卡首字母大写

```csharp
var configuration = new MapperConfiguration(cfg => {
  // cfg.SourceMemberNamingConvention = new ExactMatchNamingConvention();
  cfg.SourceMemberNamingConvention = new LowerUnderscoreNamingConvention();
  cfg.DestinationMemberNamingConvention = new PascalCaseNamingConvention();
});
```

::: tip 默认与精确的区别
对于普通映射匹配，它们大致是一样的。当源属性具有一定深度且目标属性需要展平时，存在区别。详细内容参照 [展平](#展平)
:::

该配置之后，相互映射的属性将会是：`property_name -> PropertyName`。

#### 替换属性字符

在匹配过程中，还可以替换源属性中的字符以匹配目标属性：

```csharp
public class Source
{
    public int Value { get; set; }
    public int Ävíator { get; set; }
    public int SubAirlinaFlight { get; set; }
}
public class Destination
{
    public int Value { get; set; }
    public int Aviator { get; set; }
    public int SubAirlineFlight { get; set; }
}

// 创建匹配规则
var configuration = new MapperConfiguration(c =>
{
    c.ReplaceMemberName("Ä", "A");
    c.ReplaceMemberName("í", "i");
    c.ReplaceMemberName("Airlina", "Airline");
});
```

#### 识别属性名的前后缀

有时候因为源名称和目标名称之间会有前后缀的差别，此时可以通过配置前后缀来解决：

```csharp
public class Source {
    public int srcValue { get; set; }
    public int srcValue2 { get; set; }
}
public class Destination {
    public int Value { get; set; }
    public int Value2 { get; set; }
}

var configuration = new MapperConfiguration(cfg => {
    cfg.RecognizePrefixes("src");
    cfg.CreateMap<Source, Destination>();
});
configuration.AssertConfigurationIsValid();
```

默认情况下，`AutoMapper` 会自动识别前缀为 `Get` 的属性字段，当目标属性名不包含在源属性名中，它会自动寻找前缀为 `Get` 的属性字段并进行匹配。如果要清除它，可以使用：

```csharp
var configuration = new MapperConfiguration(cfg => {
    cfg.ClearPrefixes();
})
```

## 投影

对于上面通过属性名称无法匹配的字段，可以通过投影解决，这也是非常常用的手法。

::: tip 示例代码
投影部分的完整代码可以点击 [示例代码](https://github.com/jeremyjone/dotnet-study-road/tree/master/ObjectMapper/ObjectMapper.Projection) 查看。
:::

投影不仅可以将对象模型展平，还可以将源属性转换为目标属性。在没有额外配置的情况下，`AutoMapper` 只会将名称相同的内容进行匹配。有了投影，可以将源属性的任何内容根据规则匹配到目标属性上。比如：

```csharp
// 源对象
public class Source
{
    public DateTime Date { get; set; }
    public string Title { get; set; }
}

// 目标对象
public class Destination
{
    public DateTime EventDate { get; set; }
    public int EventHour { get; set; }
    public int EventMinute { get; set; }
    public string Title { get; set; }
}
```

可以看到它们完全不匹配，根据之前的规则，也不会生效。此时，需要配置投影：

```csharp
var configuration = new MapperConfiguration(cfg =>
    cfg.CreateMap<Source, Destination>()
      .ForMember(dest => dest.EventDate, opt => opt.MapFrom(src => src.Date.Date))
      .ForMember(dest => dest.EventHour, opt => opt.MapFrom(src => src.Date.Hour))
      .ForMember(dest => dest.EventMinute, opt => opt.MapFrom(src => src.Date.Minute))
    );
```

在配置中，通过 `ForMember` 扩展方法实现对单一目标属性的扩展，它接收两个表达式，第一个要映射出目标字段，第二个是一个配置项表达式。

### 嵌套映射

嵌套映射是指源类型具有复杂类型，同时需要将复杂类型映射到目标类型中。此时，我们可以将复杂类型进行映射，就可以解决问题。

比如我们现在有源类型：

```csharp
public class OuterSource
{
    public int Value { get; set; }
    public InnerSource Inner { get; set; }
}

public class InnerSource
{
    public int OtherValue { get; set; }
}
```

需要映射到的目标类型：

```csharp
public class OuterDest
{
    public int Value { get; set; }
    public InnerDest Inner { get; set; }
}

public class InnerDest
{
    public int OtherValue { get; set; }
}
```

此时，内部的复杂类型不相同，只需要将复杂类型也进行映射配置：

```csharp
var config = new MapperConfiguration(cfg => {
    cfg.CreateMap<OuterSource, OuterDest>();
    cfg.CreateMap<InnerSource, InnerDest>();
});
```

这样就可以进行映射了，并且并不需要指定内部复杂类型的映射关系：

```csharp
var dest = mapper.Map<OuterSource, OuterDest>(source);
```

### 展平

展平内容相比于嵌套映射的区别是不再将内部复杂类型对应映射，而是通过一定规则进行处理，从而得到需要的目标类型。

比如：

```csharp
public class Order
{
    private readonly IList<OrderLineItem> _orderLineItems = new List<OrderLineItem>();

    public Customer Customer { get; set; }

    public OrderLineItem[] GetOrderLineItems()
    {
        return _orderLineItems.ToArray();
    }

    public void AddOrderLineItem(Product product, int quantity)
    {
        _orderLineItems.Add(new OrderLineItem(product, quantity));
    }

    public decimal GetTotal()
    {
        return _orderLineItems.Sum(li => li.GetTotal());
    }
}

public class Product
{
    public decimal Price { get; set; }
    public string Name { get; set; }
}

public class OrderLineItem
{
    public OrderLineItem(Product product, int quantity)
    {
        Product = product;
        Quantity = quantity;
    }

    public Product Product { get; private set; }
    public int Quantity { get; private set;}

    public decimal GetTotal()
    {
        return Quantity*Product.Price;
    }
}

public class Customer
{
    public string Name { get; set; }
}
```

我们希望将复杂的 `Order` 转换为我们需要的更为简单的 `OrderDto`：

```csharp
public class OrderDto
{
    public string CustomerName { get; set; }
    public decimal Total { get; set; }
}
```

此时，`AutoMapper` 会根据匹配规则以及匹配顺序进行查找：

```csharp
var customer = new Customer
{
    Name = "jeremyjone"
};
var order = new Order
{
    Customer = customer
};
var product = new Product
{
    Name = "product",
    Price = 4.99m
};
order.AddOrderLineItem(product, 15);

var configuration = new MapperConfiguration(cfg => cfg.CreateMap<Order, OrderDto>());
var mapper2 = configuration.CreateMapper();
var orderDto = mapper2.Map<Order, OrderDto>(order);

Console.WriteLine($"{orderDto.CustomerName}, {orderDto.Total}");
```

在这个例子中，很好的诠释了映射的查找规则。

- `OrderDto.Total` 属性与 `Order.GetTotal` 方法匹配
- `OrderDto.CustomerName` 属性与 `Order.Customer.Name` 属性匹配

通过良好的命名方式，可以减少映射规则的二次开发。

当然，如果你不希望这样进行匹配，仅仅是精确匹配，可以禁用此行为：

```csharp
cfg.DestinationMemberNamingConvention = new ExactMatchNamingConvention();
```

#### 使用 IncludeMembers

在展平的过程中，可以通过 `IncludeMembers` 获得更多细节控制。

通过一个示例体会：

```csharp
public class MemberSource
{
    public string Name { get; set; }
    public MemberInnerSource MemberInnerSource { get; set; }
    public MemberOtherInnerSource MemberOtherInnerSource { get; set; }
}

public class MemberInnerSource
{
    public string Name { get; set; }
    public string Description { get; set; }
}

public class MemberOtherInnerSource
{
    public string Name { get; set; }
    public string Description { get; set; }
    public string Title { get; set; }
}

public class MemberDestination
{
    public string Name { get; set; }
    public string Description { get; set; }
    public string Title { get; set; }
}

// 配置
var config3 = new MapperConfiguration(cfg =>
{
    // IncludeMembers 里面参数是有顺序的，映射规则按照先后顺序。先匹配到的优先
    cfg.CreateMap<MemberSource, MemberDestination>()
        .IncludeMembers(s => s.MemberInnerSource, s => s.MemberOtherInnerSource);
    cfg.CreateMap<MemberInnerSource, MemberDestination>(MemberList.None);
    cfg.CreateMap<MemberOtherInnerSource, MemberDestination>();
});

// 使用
var source3 = new MemberSource
{
    Name = "name",
    MemberInnerSource = new MemberInnerSource { Name = "inner name", Description = "description" },
    MemberOtherInnerSource = new MemberOtherInnerSource { Title = "title", Name = "other inner name", Description = "other inner desc"}
};
var mapper3 = config3.CreateMapper();
var dest3 = mapper3.Map<MemberDestination>(source3);

Console.WriteLine($"{dest3.Title}, {dest3.Name}, {dest3.Description}"); // title, name, description
```

上面例子中，通过重用映射规则中的子源类型映射到目标类型，按照规则顺序，优先读取到 `MemberSource` 中的 `Name` 属性，然后是 `MemberSource.MemberInnerSource` 中的 `Description` 属性，最后读取到 `MemberOtherInnerSource` 的 `Title` 属性，所以结果就显而易见了。

### 反向映射

通过 `ReverseMap` 方法可以快速将一个映射进行反向映射，包括展平。但是对于深度展平，需要子项映射同时进行反向映射。

对于上面的展平示例，可以使用：

```csharp {6,8,10}
var config3 = new MapperConfiguration(cfg =>
{
    // IncludeMembers 里面参数是有顺序的，映射规则按照先后顺序。先匹配到的优先
    cfg.CreateMap<MemberSource, MemberDestination>()
        .IncludeMembers(s => s.MemberInnerSource, s => s.MemberOtherInnerSource)
        .ReverseMap();
    cfg.CreateMap<MemberInnerSource, MemberDestination>(MemberList.None)
    .ReverseMap();
    cfg.CreateMap<MemberOtherInnerSource, MemberDestination>()
    .ReverseMap();
});
```

在配置后面追加 `ReverseMap()` 方法即可添加反向映射。

```csharp
dest3.Name = "jjjjjj";
mapper3.Map(dest3, source3);
Console.WriteLine($"{source3.Name}"); // jjjjjj
```

结果已经修改了源数据的名称。

### 泛型映射

有时源类型和目标类型都是泛型的，此时需要配置一个通用类型映射：

```csharp
public class GenericSource<T>
{
    public T Value { get; set; }
}

public class GenericDestination<T>
{
    public T Value { get; set; }
}

// 创建映射
var config4 = new MapperConfiguration(cfg => cfg.CreateMap(typeof(GenericSource<>), typeof(GenericDestination<>)));
```

无需封闭泛型类型，`AutoMapper` 会在运行时将所有配置从打开的通用映射应用于关闭的映射。

```csharp
// 使用
var s1 = new GenericSource<int> { Value = 10 };
var s2 = new GenericSource<string> {Value = "jeremyjone"};
var mapper4 = config4.CreateMapper();
var dest4_1 = mapper4.Map<GenericSource<int>, GenericDestination<int>>(s1);
var dest4_2 = mapper4.Map<GenericSource<string>, GenericDestination<string>>(s2);
Console.WriteLine($"{dest4_1.Value}, {dest4_2.Value}"); // 10, jeremyjone
```

### 条件映射

有时我们希望某些属性需要满足条件之后才可以映射。可以通过 `Condition` 实现，比如我们希望当下面源值中 `Value` 大于 0 才映射：

```csharp
var config5 = new MapperConfiguration(cfg =>
{
    cfg.CreateMap<Source, Destination>()
        .ForMember(destination => destination.Value, opt => opt.Condition(src => src.Value >= 0));
});
```

当然，该方法仍然是在解析过程中进行的。如果希望运行的更快，可以使用 `PreCondition` 方法。它会在解析源值之前被调用：

```csharp
cfg.CreateMap<Source, Destination>()
    .ForMember(destination => destination.Value, opt =>
    {
        opt.PreCondition(src => src.Value >= 0);
        // 使用 PreCondition 不要忘记添加真正的映射过程
        opt.MapFrom(src => src.Value);
    });
```

## 转换和解析

通常，我们在投影的过程中，除了普通的对应映射，还常常碰到类型转换、条件映射等情况。下面就来介绍这些内容。

::: tip 示例代码
转换部分的完整代码可以点击 [示例代码](https://github.com/jeremyjone/dotnet-study-road/tree/master/ObjectMapper/ObjectMapper.Convert) 查看。
:::

### 全局的类型转换

遇到类型转换，`AutoMapper` 并不会自动转换，因为它不知道我们需要如何进行转换。此时我们需要给出转换条件，也就是提供一个自定义类型转换器。

#### 简单的类型转换

对于简单的情况，我们只需要给出一个**带有源并返回目标的函数**即可，即：

```csharp
cfg.CreateMap<string, int>().ConvertUsing(s => Convert.ToInt32(s));
```

这种方式编写和使用都非常简单方便，适合不那么复杂的情况，就像上面写的那样，仅仅是将一个字符串变为数字，或者简单的操作源值。

#### 自定义类型转换器

对于更复杂的情况，上面的写法就显得比较笨拙。此时我们可以创建一个自定义的转换器，它实现了 `ITypeConverter` 接口：

```csharp
// 接口定义（AutoMapper 接口，不需要自己定义）
public interface ITypeConverter<in TSource, TDestination>
{
    TDestination Convert(TSource source, TDestination destination, ResolutionContext context);
}
```

我们实现该接口内容：

```csharp
public class TypeTypeConverter : ITypeConverter<string, Type>
{
    public Type Convert(string source, Type destination, ResolutionContext context)
    {
        return Assembly.GetExecutingAssembly().GetType(source);
    }
}

public class DateTimeTypeConverter : ITypeConverter<string, DateTime>
{
    public DateTime Convert(string source, DateTime destination, ResolutionContext context)
    {
        return System.Convert.ToDateTime(source);
    }
}
```

配置时只需要传入自定义转换器即可：

```csharp
// 传入自定义转换器的两种方式
cfg.CreateMap<string, DateTime>().ConvertUsing(new DateTimeTypeConverter());
cfg.CreateMap<string, Type>().ConvertUsing<TypeTypeConverter>();
```

### 值的类型转换

上述类型转换都是作用于全局的，有时我们仅仅希望一个值属性进行转换，这时就需要值的类型转换器。

值的类型转换器的作用域是单个映射，接收源对象和目标对象以解析要映射到目标成员的值。

值的类型转换器实现自 `IValueConverter` 接口：

```csharp
// 接口定义（AutoMapper 接口，不需要自己定义）
public interface IValueConverter<in TSourceMember, out TDestinationMember>
{
    TDestinationMember Convert(TSourceMember sourceMember, ResolutionContext context);
}
```

我们实现它：

```csharp
public class CustomValueConverter : IValueConverter<int, string>
{
    public string Convert(int sourceMember, ResolutionContext context)
    {
        return sourceMember.ToString();
    }
}
```

既然是单个映射，那么值的类型转换器自然需要在成员级别使用：

```csharp
cfg.CreateMap<Source, Destination>()
    .ForMember(dest => dest.Value, opt => opt.ConvertUsing(new CustomValueConverter()));
```

#### 重定向映射源值

在值的转换过程中，有时不是匹配的名称，此时可以通过重新定义源值属性：

```csharp {6}
cfg.CreateMap<Source, Destination>()
    .ForMember(
        dest => dest.Value,
        opt =>
            opt.ConvertUsing(new CustomValueConverter(),
            src => src.MyValue
        ));
```

### 值的解析

上面是针对类型，那么如果仅仅是通过 `ForMember()` 中的 `MapFrom()` 按照值解析呢？此时需要实现 `IValueResolver` 接口：

```csharp
// 接口定义（AutoMapper 接口，不需要自己定义）
public interface IValueResolver<in TSource, in TDestination, TDestMember>
{
    TDestMember Resolve(TSource source, TDestination destination, TDestMember destMember, ResolutionContext context);
}
```

我们现在有：

```csharp
public class ValueConvertSource
{
    public int Value1 { get; set; }
    public int Value2 { get; set; }
}

public class ValueConvertDestination
{
    public int Total { get; set; }
}
```

我们需要把源对象中两个值相加的和赋给目标对象的 `Total` 属性，则可以实现该接口：

```csharp
public class ValueConvertResolver : IValueResolver<ValueConvertSource, ValueConvertDestination, int>
{
    public int Resolve(ValueConvertSource source, ValueConvertDestination destination, int member, ResolutionContext context)
    {
        return source.Value1 + source.Value2;
    }
}
```

然后将该实现类放入配置中：

```csharp
var config2 = new MapperConfiguration(cfg =>
{
    cfg.CreateMap<ValueConvertSource, ValueConvertDestination>().ForMember(dest => dest.Total,
        opt => opt.MapFrom<ValueConvertResolver>());
});
```

不希望 `AutoMapper` 通过反射创建实例的话，可以手动创建一个实例：

```csharp
opt.MapFrom(new ValueConvertResolver());
```

#### 从上下文获取键值对象

还有一种比较特殊的用法，至少我没用过。它是通过在映射时传入键值的方式来给目标对象赋值。

```csharp
mapper.Map<Source, Destination>(src, opt => opt.Items["Value"] = 10);
```

这样的方式需要在配置中填写上下文：

```csharp
cfg.CreateMap<Source, Destination>().ForMember(dest=>dest.OtherValue, opt => opt.MapFrom((src, dest, destMember, content) => content.Items["Value"]));
```

#### 改变值的内容

有时，我们仅仅是需要修改值的内容，比如源数据是 "Hello"，我们需要加一个 "World"，那么可以通过修改值的方法 `ValueTransformers` 来达到效果：

```csharp
// 全局
cfg.ValueTransformers.Add<string>(src => src + " World");

// 局部
opt => opt.AddTransform(src => src + " World");
```

这样就达到修改值的效果。

具体区别效果，可以参考 [我的代码示例仓库](https://github.com/jeremyjone/dotnet-study-road/tree/master/ObjectMapper/ObjectMapper.Convert/Program.cs) `修改值的内容` 的部分。

## 映射前后

有时候需要在映射的前后做一些操作，虽然这种情况很少，但确实存在。

通过 `BeforeMap` 和 `AfterMap` 方法可以操作映射的前后操作：

```csharp
var configuration = new MapperConfiguration(cfg => {
    cfg.CreateMap<Source, Dest>()
      .BeforeMap((src, dest) => src.Value = src.Value + 10)
      .AfterMap((src, dest) => dest.Name = "John");
});
```

甚至可以在映射期间创建，这中配置非常有用：

```csharp
int i = 10;
mapper.Map<Source, Dest>(src, opt => {
    opt.BeforeMap((src, dest) => src.Value = src.Value + i);
    opt.AfterMap((src, dest) => dest.Name = HttpContext.Current.Identity.Name);
});
```

当然，还可以通过实现接口的方式来创建一些更复杂的操作：

```csharp
public class NameMeJohnAction : IMappingAction<SomePersonObject, SomeOtherPersonObject>
{
    public void Process(SomePersonObject source, SomeOtherPersonObject destination, ResolutionContext context)
    {
        destination.Name = "John";
    }
}

var configuration = new MapperConfiguration(cfg => {
  cfg.CreateMap<SomePersonObject, SomeOtherPersonObject>()
    .AfterMap<NameMeJohnAction>();
});
```

## 在 ASP.NET Core 中使用 AutoMapper

::: tip 示例代码
完整示例代码可以点击 [示例代码](https://github.com/jeremyjone/dotnet-study-road/tree/master/ObjectMapper/ObjectMapper.AM) 查看。
:::

### 安装插件

与安装普通 `AutoMapper` 不同，我们需要安装包含依赖注入的插件：

```sh
PM> Install-Package AutoMapper.Extensions.Microsoft.DependencyInjection
```

### 添加服务

安装之后，在 `Startup.cs` 中添加服务：

```csharp
services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
// or
services.AddAutoMapper(typeof(Startup).Assembly);
```

这会让 `AutoMapper` 自动收集继承自 `Profile` 的配置类。

### 配置映射关系

创建一个 `UserProfile` 类，并继承 `Profile`，然后在构造器中添加配置：

```csharp
public class UserProfile: Profile
{
    public UserProfile()
    {
        CreateMap<User, UserDto>()
        // ... 详细配置
        ;
    }
}
```

### 使用映射器

依次配置好 Profile 之后，就可以开始使用映射器了。

`AutoMapper` 通过一个名为 `IMapper` 的抽象接口实现注入：

```csharp
private readonly IMapper _mapper;

public HomeController(IMapper mapper)
{
    _mapper = mapper;
}
```

然后在 `Index` 方法中创建一个 `User`，并映射为 `UserDto`，然后返回：

```csharp
public IActionResult Index()
{
    var user = new User
    {
        Id = 1,
        LoginName = "jeremyjone",
        Nickname = "JeremyJone",
        FirstName = "Jeremy",
        MiddleName = "",
        LastName = "Jone",
        BirthDate = DateTime.Parse("2000-01-01"),
        Email = "jeremyjone@qq.com",
        LoginTime = DateTime.Parse("2021-4-10"),
        Password = "123456"
    };

    var userDto = _mapper.Map<UserDto>(user);

    return Ok(userDto);
}
```

运行程序，用浏览器访问，得到如下结果：

<img :src="$withBase('/assets/roadmap/dotnet/mapper/usemapper.png')" alt="usemapper">

一切都是那么顺滑。嗯，这就是 `AutoMapper` 的全部。

## 其他

掌握上面的内容已经足够。需要更多，可以参考 [官方文档](https://docs.automapper.org/en/latest/Getting-started.html) 、[Github](https://github.com/AutoMapper/AutoMapper) 或阅读源码。
