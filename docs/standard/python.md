# Python 开发规范

<Description author="jeremyjone" date="2019.7.9" version="v1.1" copyright="FFM TD" />

This rule defines the basic rules for python code, Developers need to follow this rule to develop. All python code for FFM needs to follow this rule.

## For Environment

* 【**compulsory**】Try not to change the production environment, if necessary change, need to apply, Amendments may be made only after the application is approved.

* 【**compulsory**】If a new package needs to be installed, it needs to be submitted with SVN updates and tell everyone.

## For Style

* 【**compulsory**】Should be follow Pythonic style. PEP8 format.

* 【**compulsory**】Code is strictly prohibited to use **pinyin** and **English** mixed way, not to allow direct use of the **Chinese way**.
    *Explanation: correct English spelling and grammar can make readers understand easily and avoid ambiguity. Note that even pure pinyin naming should be avoided.*

* 【**compulsory**】Every methods, variables name should be meaningful, use descriptive names with one or more simple English words by **camelCaseStyle**.

    ```python
    def pythonFunction():
        varNum = 1
        varStr = 'a'
        vardict = dict()
        pyFuncAttr = "python function attribute"
    ```

* 【**compulsory**】Class name must be start with a capital letter, overall use camel case style. And there should be `_init__()` constructors.

    ```python
    class PythonClassCode(object):
        def __init__(self):
            pass
    ```

* 【**compulsory**】Private members should be represented by a double underscore.

    ```python
    __privateNum = 1
    def __privateFunction():
        pass
    ```

* 【**compulsory**】Constant name all uppercase, words with underline between, strive to semantic expression complete and clear, not too long name.

    ```python
    MAX_COUNT = 10
    MAX_LETTER_PER_LINE = 80
    ```

* 【**compulsory**】Avoid abbreviations that are completely unregulated, `condition` "abbreviation" is named `condi`. Such arbitrary abbreviations seriously reduce the readability of the code.

* 【**suggestion**】Single letter strings should use single quotation marks.

    ```python
    oneLetter = 'a'
    ```

* 【**suggestion**】Double quotation marks should be used for multi-letter strings.

    ```python
    moreLetter = "abc"
    ```

* 【**suggestion**】Create empty dict, list, tuple, don't use `{}, [], ()`, expect to use `dict(), list(), tuple()`

    ```python
    # Wrong
    myDict = {}
    myList = []
    myTuple = ()

    # Right
    myDict = dict()
    myList = list()
    myTuple = tuple()
    ```

## For Format

* 【**compulsory**】4 Spaces are indented. TAB characters are not allowed.
    *If TAB indentation is used, one TAB must be set to four Spaces.*

* 【**compulsory**】An empty line of functions within the class. Two lines between different class.

* 【**compulsory**】Empty two lines between the import package statement and the function or class.

* 【**compulsory**】The contents of dict, list, or tuple must be presented in multiple lines if they exceed 80 characters.

    ```python
    listContent = [
        "first",
        "second",
        "third"
    ]

    dictContent = {
        a = '1',
        b = '2',
        c = '3'
    }
    ```

* 【**compulsory**】Comments line must be above the commented code.

    ```python
    # Comments line
    pythonCode = "python code"
    ```

* 【**suggestion**】Comments in class, function should be used **Document string**.

    ```python
     class pythonClass(object):
        """class comment. (Document string)"""
        def __init__():
            pass

        def clsFunc(arg1, arg2):
            """
            this function comment. (Document string)

            :param arg1: ...
            :param arg2: ...
            :return: ...
            """
            pass
    ```

* 【**suggestion**】The code should be clear enough, and the comments should be detailed enough to help us understand the code better. Comments help us understand and maintain code better.
    *If the code is simple and clear enough, no comments are required.*
    *Conversely, if the code is logically complex, detailed comments are required.*

## For Test

* 【**compulsory**】All modules should have independent unit testing capabilities.

* 【**compulsory**】Test units should not call and depend on each other, nor can it depend on the order of execution.

* 【**compulsory**】Unit tests are repeatable and cannot be affected by the environment.
