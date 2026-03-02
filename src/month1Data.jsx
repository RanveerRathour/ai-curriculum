// ─── MONTH 1 DATA ───
// Dart-to-Python syntax comparison table and full Month 1 curriculum
// for a Flutter/Dart developer transitioning to AI/ML engineering.

// ─── DART vs PYTHON SYNTAX COMPARISON TABLE ───
const dartVsPython = [
  {
    dart: `// Variable declaration\nString name = 'Ranveer';\nint age = 24;\nfinal pi = 3.14;\nconst maxRetries = 5;`,
    python: `# Variable declaration — no type keyword needed, Python infers it\nname = 'Ranveer'   # str\nage = 24            # int\nPI = 3.14           # convention: UPPER_CASE for constants (not enforced)\nMAX_RETRIES = 5     # Python has no const/final — just naming convention`,
  },
  {
    dart: `// Lists (ordered, mutable)\nList<int> nums = [1, 2, 3];\nnums.add(4);\nnums.where((n) => n > 2).toList();\nvar doubled = nums.map((n) => n * 2).toList();`,
    python: `# Lists (ordered, mutable) — same concept, simpler syntax\nnums = [1, 2, 3]          # no type annotation needed\nnums.append(4)            # .add() in Dart → .append() in Python\n[n for n in nums if n > 2]  # list comprehension replaces .where()\ndoubled = [n * 2 for n in nums]  # comprehension replaces .map().toList()`,
  },
  {
    dart: `// Maps (key-value pairs)\nMap<String, int> scores = {'math': 95, 'science': 88};\nscores['english'] = 76;\nscores.forEach((key, value) {\n  print('$key: $value');\n});`,
    python: `# Dicts (key-value pairs) — Dart's Map is Python's dict\nscores = {'math': 95, 'science': 88}   # dict literal\nscores['english'] = 76                  # same bracket syntax\nfor key, value in scores.items():        # .items() gives key-value tuples\n    print(f'{key}: {value}')             # f-string instead of $interpolation`,
  },
  {
    dart: `// Functions with named & default parameters\nint add(int a, int b) => a + b;\n\nString greet({required String name, int age = 25}) {\n  return 'Hello $name, age $age';\n}`,
    python: `# Functions — def keyword, indentation instead of braces\ndef add(a, b):          # no return type annotation required (but can add)\n    return a + b\n\ndef greet(name: str, age: int = 25) -> str:   # type hints are optional\n    return f'Hello {name}, age {age}'\n# Python uses keyword arguments naturally: greet(name='Ranveer', age=24)`,
  },
  {
    dart: `// Classes with constructor\nclass Dog {\n  final String name;\n  final int age;\n  Dog({required this.name, required this.age});\n\n  @override\n  String toString() => 'Dog($name, $age)';\n\n  void bark() => print('Woof!');\n}`,
    python: `# Classes — __init__ replaces constructor, self replaces this\nclass Dog:\n    def __init__(self, name: str, age: int):   # constructor\n        self.name = name    # self is explicit (Dart's 'this' is implicit)\n        self.age = age\n\n    def __str__(self):      # toString() → __str__() (dunder method)\n        return f'Dog({self.name}, {self.age})'\n\n    def bark(self):         # every method takes self as first param\n        print('Woof!')`,
  },
  {
    dart: `// Async/Await\nFuture<String> fetchData() async {\n  final response = await http.get(Uri.parse(url));\n  return response.body;\n}\n// Dart uses a single event loop — every Future is scheduled on it.`,
    python: `# Async/Await — nearly identical syntax, but needs asyncio to run\nimport asyncio\nimport aiohttp\n\nasync def fetch_data():                         # async def instead of Future\n    async with aiohttp.ClientSession() as s:    # async context manager\n        resp = await s.get(url)                 # await works the same\n        return await resp.text()\n# KEY DIFFERENCE: must run with asyncio.run(fetch_data()) — no auto event loop`,
  },
  {
    dart: `// Null Safety\nString? nullableName;           // ? means nullable\nString definite = name ?? 'fallback';  // ?? null coalescing\nint len = nullableName?.length ?? 0;   // ?. null-aware access`,
    python: `# Null Safety — Python uses None instead of null, no built-in null safety\nnullable_name = None                     # None is Python's null\nnullable_name: str | None = None         # type hint for nullable (3.10+)\ndefinite = name if name is not None else 'fallback'  # ternary replaces ??\nlength = len(nullable_name) if nullable_name else 0  # no ?. operator\n# Python has no compile-time null safety — you must check manually or use Optional`,
  },
  {
    dart: `// Error Handling\ntry {\n  int result = 10 ~/ 0;\n} on IntegerDivisionByZeroException {\n  print('Cannot divide by zero');\n} catch (e, stackTrace) {\n  print('Error: $e');\n} finally {\n  print('Cleanup done');\n}`,
    python: `# Error Handling — try/except instead of try/catch, Exception classes\ntry:\n    result = 10 // 0\nexcept ZeroDivisionError:               # 'on' → 'except' + specific type\n    print('Cannot divide by zero')\nexcept Exception as e:                  # 'catch (e)' → 'except Exception as e'\n    import traceback\n    traceback.print_exc()               # stackTrace equivalent\nfinally:\n    print('Cleanup done')               # finally is identical`,
  },
  {
    dart: `// String Interpolation\nString name = 'Ranveer';\nint age = 24;\nprint('Hello $name, age $age');\nprint('Next year: \\${age + 1}');\nString multi = '''\n  Multi-line\n  string here\n''';`,
    python: `# String Interpolation — f-strings are Python's $ interpolation\nname = 'Ranveer'\nage = 24\nprint(f'Hello {name}, age {age}')        # f'' prefix enables {expressions}\nprint(f'Next year: {age + 1}')           # any expression inside {}\nmulti = """\n  Multi-line\n  string here\n"""                                       # triple quotes for multi-line`,
  },
  {
    dart: `// Lambda / Arrow Functions\nvar doubled = nums.map((n) => n * 2);\nnums.sort((a, b) => a.compareTo(b));\nvar isEven = (int n) => n % 2 == 0;`,
    python: `# Lambda — single expression only, more limited than Dart arrows\ndoubled = list(map(lambda n: n * 2, nums))  # lambda keyword, colon syntax\nnums.sort(key=lambda x: x)                  # sort uses key= parameter\nis_even = lambda n: n % 2 == 0              # can assign to variable\n# Pythonic style prefers list comprehensions over map/lambda:\ndoubled = [n * 2 for n in nums]             # this is preferred in Python`,
  },
  {
    dart: `// Enums\nenum Status { loading, success, error }\nvar s = Status.loading;\nswitch (s) {\n  case Status.loading: print('Loading...');\n  case Status.success: print('Done!');\n  case Status.error:   print('Failed.');\n}`,
    python: `# Enums — need to import from enum module\nfrom enum import Enum\n\nclass Status(Enum):        # inherit from Enum base class\n    LOADING = 'loading'    # must assign values explicitly\n    SUCCESS = 'success'\n    ERROR   = 'error'\n\nmatch s:                            # Python 3.10+ match/case (like switch)\n    case Status.LOADING: print('Loading...')\n    case Status.SUCCESS: print('Done!')\n    case Status.ERROR:   print('Failed.')`,
  },
  {
    dart: `// Generics\nclass Box<T> {\n  final T value;\n  Box(this.value);\n  T get() => value;\n}\nvar intBox = Box<int>(42);`,
    python: `# Generics — use typing module (Python 3.12+ has simpler syntax)\nfrom typing import Generic, TypeVar\n\nT = TypeVar('T')\n\nclass Box(Generic[T]):\n    def __init__(self, value: T):\n        self.value = value\n    def get(self) -> T:\n        return self.value\n\nint_box = Box[int](42)   # type hint only — not enforced at runtime`,
  },
];

// ─── MONTH 1 PHASES: PYTHON + DATA SCIENCE FOUNDATIONS (Days 1–14, ~43h) ───
const month1Phases = [
  // ═══════════════════════════════════════════════════════════════════════
  // PHASE 1 — Python Syntax for Dart Devs (Days 1–4, 12h)
  // ═══════════════════════════════════════════════════════════════════════
  {
    phase: "Phase 1",
    title: "Python Syntax for Dart Devs",
    duration: "Days 1-4",
    hours: "12h",
    emoji: "🐍",
    note: "You already know programming — you know variables, loops, classes, async. This phase is NOT about learning to code from scratch. It is about learning the Python dialect of what you already know. Think of it like learning Urdu when you already speak Hindi — the grammar is similar, the vocabulary just changes. By Day 4 you will write Python as naturally as you write Dart.",
    topics: [
      // ─── DAY 1: Setup + Core Syntax (3h) ───
      {
        day: "Day 1",
        hours: "3h",
        title: "Environment Setup + Core Python Syntax",
        subtopics: [
          {
            name: "Install Python 3.11+ & VS Code Setup",
            time: "20min",
            note: "Go to python.org/downloads and install Python 3.11 or 3.12 (NOT 3.13 yet — some ML libraries lag behind). On Mac use 'brew install python@3.12'. In VS Code, install the 'Python' extension by Microsoft (it has 90M+ downloads — you can't miss it). Also install 'Pylance' for IntelliSense. Verify installation by opening terminal and typing 'python3 --version'. If you see 3.11+ you're good. This is like installing the Dart SDK — it's the runtime that executes your .py files. If stuck, Google 'install Python 3.12 on mac/windows 2025'.",
          },
          {
            name: "Python REPL & Running .py Files",
            time: "10min",
            note: "Type 'python3' in terminal to enter the REPL (Read-Eval-Print-Loop) — this is like Dart's 'dart run' but interactive. You can type 'print(2+2)' and see '4' instantly. To run a file: create 'hello.py', write 'print(\"Hello AI world\")', then run 'python3 hello.py' in terminal. In VS Code you can also press the green play button. The REPL is your scratchpad — use it constantly to test small snippets. Exit REPL with 'exit()' or Ctrl+D.",
          },
          {
            name: "Variables, Types & Dynamic Typing",
            time: "20min",
            note: "In Dart you write 'String name = \"Ranveer\";' — in Python it's just 'name = \"Ranveer\"'. No semicolons, no type keyword. Python is dynamically typed: a variable can hold a string, then an int, then a list — no compiler stops you. Use type() to check: 'type(name)' returns <class 'str'>. Core types: int, float, str, bool, None. In Dart 'null' is 'None' in Python (capital N). This dynamic typing feels scary after Dart's safety — but we'll add type hints later in Day 6.",
          },
          {
            name: "Indentation-Based Blocks (No Braces!)",
            time: "15min",
            note: "This is the BIGGEST shift from Dart. Python uses indentation (4 spaces) instead of curly braces {} to define code blocks. An 'if' statement looks like: 'if x > 5:\\n    print(\"big\")'. The colon ':' starts a block, and everything indented under it is inside the block. If you mix tabs and spaces you get 'IndentationError' — configure VS Code to use 4 spaces (it does this by default for .py files). Think of it this way: in Dart, braces define scope; in Python, whitespace defines scope. Your Dart habit of pressing '{' will be replaced by pressing ':' and Enter.",
          },
          {
            name: "if/elif/else, Truthiness & Comparisons",
            time: "20min",
            note: "Dart: 'if (x > 5) { } else if (x > 2) { } else { }'. Python: 'if x > 5:\\n    ...\\nelif x > 2:\\n    ...\\nelse:\\n    ...'. Key differences: no parentheses needed around conditions (but you can add them), 'else if' becomes 'elif' (one word), and Python has broader 'truthiness' — empty list [], empty string '', 0, None are all falsy. So 'if my_list:' checks if list is non-empty. This is like Dart's null check but more powerful. Comparison: use 'is' for identity (like Dart's 'identical()') and '==' for equality.",
          },
          {
            name: "for Loops & range()",
            time: "20min",
            note: "Dart: 'for (int i = 0; i < 10; i++)'. Python: 'for i in range(10):'. The range() function generates numbers: range(5) gives 0,1,2,3,4; range(2,8) gives 2,3,4,5,6,7; range(0,10,2) gives 0,2,4,6,8. To loop over a list: 'for item in my_list:' (same as Dart's 'for (var item in myList)'). To get index AND value: 'for i, item in enumerate(my_list):' — this replaces Dart's 'asMap().forEach()'. Python's for loop is always a for-each; there's no C-style for loop.",
          },
          {
            name: "while Loops, break, continue, pass",
            time: "10min",
            note: "while loops work identically to Dart: 'while condition:\\n    do_stuff()'. 'break' and 'continue' work the same. New keyword: 'pass' — it means 'do nothing' and is used as a placeholder in empty blocks. In Dart you'd write 'void placeholder() {}' — in Python you write 'def placeholder():\\n    pass'. You need it because Python's indentation rules require at least one statement in every block. You'll use 'pass' when stubbing out classes or functions you'll fill in later.",
          },
          {
            name: "String Operations & f-strings",
            time: "20min",
            note: "Dart uses '$variable' and '${expression}' for interpolation. Python uses f-strings: f'Hello {name}, next year {age + 1}'. The 'f' prefix before the quote is required — without it, {name} is literal text. Other string methods you'll use constantly: .strip() (like Dart's .trim()), .split(), .join(), .replace(), .startswith(), .endswith(), .upper(), .lower(). Multi-line strings use triple quotes: '''text''' or \"\"\"text\"\"\". Strings are immutable in Python just like Dart.",
          },
          {
            name: "Input/Output & Basic Script Structure",
            time: "15min",
            note: "print() works like Dart's print(). To get user input: 'name = input(\"Enter name: \")' — it always returns a string, so 'age = int(input(\"Age: \"))' to convert. The Pythonic way to structure a script file is: imports at top, then function definitions, then 'if __name__ == \"__main__\":' block at bottom. This 'if __name__' guard is like Dart's 'void main()' — it's the entry point. Code inside it only runs when the file is executed directly, not when imported as a module.",
          },
          {
            name: "Practice: Kaggle Learn Python — Lessons 1 & 2",
            time: "30min",
            note: "Go to kaggle.com/learn/python and complete 'Lesson 1: Hello, Python' and 'Lesson 2: Functions and Getting Help'. Kaggle's exercises run in the browser (no setup needed) and auto-check your answers. This is the single best free resource for learning Python basics quickly. Each lesson has a tutorial (read it) and an exercise notebook (complete every cell). If you finish early, also do Lesson 3: Booleans and Conditionals. These lessons are specifically designed for people who already know another language.",
          },
        ],
        resource:
          "Kaggle Learn Python Course — Lessons 1-3 (kaggle.com/learn/python) + Python Official Tutorial Chapter 3: An Informal Introduction (docs.python.org/3/tutorial/introduction.html)",
        milestone:
          "Can write and run a Python script that takes user input, uses if/elif/else and for loops, and prints formatted output using f-strings.",
      },

      // ─── DAY 2: Data Structures (3h) ───
      {
        day: "Day 2",
        hours: "3h",
        title: "Python Data Structures Deep Dive",
        subtopics: [
          {
            name: "Lists — Creation, Indexing, Slicing",
            time: "20min",
            note: "Lists are Python's version of Dart's List<dynamic>. Create with 'nums = [1, 2, 3, 4, 5]'. Indexing is the same: nums[0] gives 1. SLICING is new and incredibly powerful: nums[1:4] gives [2, 3, 4] (start inclusive, end exclusive). nums[:3] gives first 3 items. nums[-1] gives last item. nums[::-1] reverses the list. Slicing syntax is 'list[start:stop:step]'. You will use slicing CONSTANTLY in NumPy and Pandas — it's how you select rows/columns from data matrices. Master this today.",
          },
          {
            name: "List Methods & Mutations",
            time: "15min",
            note: "Dart's .add() → Python's .append(). Dart's .addAll() → Python's .extend() or += operator. .insert(index, item), .remove(item), .pop(index), .sort(), .reverse(), .index(item), .count(item). Key gotcha: .sort() sorts IN PLACE and returns None — 'sorted_list = my_list.sort()' gives you None! Use 'sorted_list = sorted(my_list)' to get a new sorted list. This trips up Dart devs because Dart's .sort() returns void too but you rarely assign it.",
          },
          {
            name: "List Comprehensions (Python's Superpower)",
            time: "25min",
            note: "This replaces Dart's .map(), .where(), and .toList() in ONE line. Syntax: '[expression for item in iterable if condition]'. Examples: '[x**2 for x in range(10)]' gives squares. '[x for x in nums if x % 2 == 0]' filters even numbers. '[word.upper() for word in words]' uppercases all. You can nest them: '[[0]*cols for _ in range(rows)]' creates a 2D grid. List comprehensions are 20-30% faster than equivalent for loops AND more readable once you're used to them. In AI/ML you'll use them to preprocess data, build feature lists, and transform datasets.",
          },
          {
            name: "Tuples — Immutable Sequences",
            time: "15min",
            note: "Tuples are like Dart's unmodifiable lists but built into the language. Create with 'point = (3, 4)' or 'rgb = (255, 128, 0)'. Access with indexing: point[0] gives 3. You CANNOT modify them: 'point[0] = 5' raises TypeError. Why use them? They're faster than lists, can be dictionary keys (lists can't), and signal intent: 'this data should not change'. Functions can return tuples for multiple return values: 'def min_max(lst): return min(lst), max(lst)' then 'lo, hi = min_max(nums)' — this tuple unpacking is VERY Pythonic.",
          },
          {
            name: "Dictionaries — Deep Dive",
            time: "20min",
            note: "Python's dict is Dart's Map. Create: 'user = {\"name\": \"Ranveer\", \"age\": 24}'. Access: user['name'] or user.get('name', 'default'). The .get() method is crucial — user['nonexistent'] raises KeyError, but user.get('nonexistent', 'fallback') returns 'fallback' safely (like Dart's map['key'] ?? 'fallback'). Useful methods: .keys(), .values(), .items() (returns key-value tuples), .update() (merges dicts), .pop(key). Dict comprehension: '{k: v**2 for k, v in scores.items()}'. In ML you'll use dicts for hyperparameters, JSON data, and feature mappings.",
          },
          {
            name: "Sets & Set Operations",
            time: "15min",
            note: "Sets are unordered collections of unique items — same as Dart's Set. Create: 'unique = {1, 2, 3}' or 'unique = set([1, 1, 2, 3])' gives {1, 2, 3}. Empty set MUST be 'set()' not '{}' (that creates an empty dict!). Operations: union (a | b), intersection (a & b), difference (a - b), symmetric difference (a ^ b). In ML you'll use sets for finding unique categories, deduplicating data, and comparing feature sets between datasets.",
          },
          {
            name: "Unpacking, Swapping & Star Expressions",
            time: "15min",
            note: "Python unpacking is magical. 'a, b, c = [1, 2, 3]' assigns each. Swap: 'a, b = b, a' (no temp variable needed!). Star expressions: 'first, *rest = [1, 2, 3, 4, 5]' gives first=1, rest=[2,3,4,5]. 'first, *middle, last = [1,2,3,4,5]' gives first=1, middle=[2,3,4], last=5. You can unpack in for loops: 'for name, score in [('math',95), ('sci',88)]:'. This pattern appears everywhere in data science when iterating over DataFrames and tuples.",
          },
          {
            name: "Nested Data Structures & Real-World JSON Shape",
            time: "15min",
            note: "In your Flutter work, you parse JSON into model classes. In Python data science, you often work with raw nested structures: lists of dicts, dicts of lists, etc. Practice navigating: 'users = [{\"name\": \"A\", \"scores\": [90,85]}, {\"name\": \"B\", \"scores\": [78,92]}]'. Get first user's second score: 'users[0][\"scores\"][1]'. Build a list of all names: '[u[\"name\"] for u in users]'. Average of all scores: comprehension + sum/len. This exact pattern is how you'll explore Kaggle datasets before loading them into Pandas.",
          },
          {
            name: "Practice: Kaggle Learn Python — Lessons 4 & 5",
            time: "30min",
            note: "Complete Kaggle Learn Python 'Lesson 4: Lists' and 'Lesson 5: Loops and List Comprehensions'. The exercises are hands-on and will test everything you learned above. If you finish quickly, try writing a small program that: (1) creates a list of 20 random numbers, (2) filters out evens using a list comprehension, (3) stores results in a dict with keys 'original', 'evens', 'odds', (4) prints a summary. This mimics real data pipeline work.",
          },
        ],
        resource:
          "Kaggle Learn Python — Lessons 4-5 (kaggle.com/learn/python) + Corey Schafer YouTube — 'Python Tutorial for Beginners 4: Lists, Tuples, Sets' (youtu.be/W8KRzm-HUcc, ~30min)",
        milestone:
          "Can use lists, tuples, dicts, sets with confidence. Can write list/dict comprehensions to transform data. Can unpack tuples and navigate nested JSON-like structures.",
      },

      // ─── DAY 3: OOP, Modules & File I/O (3h) ───
      {
        day: "Day 3",
        hours: "3h",
        title: "OOP, Modules & File I/O",
        subtopics: [
          {
            name: "Classes & __init__ (Constructors)",
            time: "20min",
            note: "You already know OOP from Dart. Python classes use 'class ClassName:' with __init__ as the constructor. EVERY method takes 'self' as its first parameter — this is Dart's 'this' but explicit. 'class Person:\\n    def __init__(self, name, age):\\n        self.name = name\\n        self.age = age'. No 'new' keyword needed: 'p = Person(\"Ranveer\", 24)'. Instance variables are created by assigning to 'self.xxx' inside __init__ — there's no separate field declaration like Dart. This feels loose but it's how Python works.",
          },
          {
            name: "Dunder (Magic) Methods",
            time: "20min",
            note: "Dunder means 'double underscore' — __init__, __str__, __repr__, __len__, __eq__, etc. These are like Dart's operator overloading and toString(). __str__() is called by print() and str() — like Dart's toString(). __repr__() is the 'developer representation' shown in REPL. __eq__(self, other) lets you use '==' (like Dart's operator ==). __len__() lets you use len(obj). __getitem__() lets you use obj[key]. In ML libraries like PyTorch, custom datasets implement __len__ and __getitem__ — this is why dunder methods matter for AI.",
          },
          {
            name: "Inheritance & super()",
            time: "15min",
            note: "Python supports single and multiple inheritance. 'class Dog(Animal):' means Dog extends Animal (Dart: 'class Dog extends Animal'). Call parent: 'super().__init__(name)' inside child's __init__. Multiple inheritance: 'class C(A, B):' — Python uses MRO (Method Resolution Order) to resolve conflicts. In Dart you use mixins for this. Key difference: Python has no 'abstract' keyword built in — use 'from abc import ABC, abstractmethod' and inherit from ABC. You'll see inheritance in ML when extending base model classes.",
          },
          {
            name: "Dataclasses (Python's Freezed Equivalent)",
            time: "20min",
            note: "In Dart/Flutter you use freezed or equatable for model classes. Python 3.7+ has @dataclass decorator: 'from dataclasses import dataclass\\n@dataclass\\nclass Point:\\n    x: float\\n    y: float'. This auto-generates __init__, __repr__, __eq__ — no boilerplate! For immutable: '@dataclass(frozen=True)'. For defaults: 'z: float = 0.0'. Dataclasses are used everywhere in ML configs and data models. They replace the tedious __init__/self.x = x pattern. Think of them as Python's answer to Dart's 'final' fields with auto-generated constructors.",
          },
          {
            name: "Modules & Imports",
            time: "15min",
            note: "Every .py file is a module. Import: 'import math' then 'math.sqrt(16)'. Selective import: 'from math import sqrt, pi' then 'sqrt(16)' directly. Alias: 'import numpy as np' (you'll write this literally thousands of times in ML). From your own files: 'from my_module import MyClass'. Packages are folders with __init__.py inside (like Dart packages with pubspec.yaml). In Dart you write 'import package:flutter/material.dart' — in Python it's 'from sklearn.linear_model import LinearRegression'. Same concept, different syntax.",
          },
          {
            name: "File I/O — Reading & Writing Files",
            time: "20min",
            note: "In Dart you use dart:io's File class. In Python: 'with open(\"data.txt\", \"r\") as f:\\n    content = f.read()'. The 'with' statement (context manager) auto-closes the file — like Dart's try-finally but cleaner. Modes: 'r' (read), 'w' (write/overwrite), 'a' (append), 'rb'/'wb' (binary). For line-by-line: 'for line in f:'. Write: 'with open(\"out.txt\", \"w\") as f:\\n    f.write(\"hello\\n\")'. You'll read CSV files, model weights, and config files constantly in ML.",
          },
          {
            name: "JSON Handling",
            time: "15min",
            note: "In Flutter you use dart:convert's jsonDecode/jsonEncode. Python: 'import json'. Parse: 'data = json.loads(json_string)' returns a dict. Dump: 'json_string = json.dumps(data, indent=2)'. File: 'with open(\"data.json\") as f: data = json.load(f)' (note: loads for string, load for file). Write: 'with open(\"out.json\", \"w\") as f: json.dump(data, f, indent=2)'. In ML you'll use JSON for config files, API responses, and dataset metadata. The pattern is nearly identical to Dart — just different function names.",
          },
          {
            name: "Working with CSV (csv module + preview of Pandas)",
            time: "15min",
            note: "The built-in csv module handles CSV files: 'import csv\\nwith open(\"data.csv\") as f:\\n    reader = csv.DictReader(f)\\n    for row in reader:\\n        print(row[\"column_name\"])'. DictReader turns each row into a dict with column headers as keys. However, in real ML work you'll use Pandas instead (Day 10-11). This is just so you understand what's happening under the hood. Think of csv module as the low-level approach and Pandas as the high-level framework — like using http package vs dio in Flutter.",
          },
          {
            name: "Practice: Build a Contact Manager CLI App",
            time: "30min",
            note: "Build a small CLI app that: (1) has a Contact dataclass with name, phone, email fields, (2) loads contacts from a JSON file on startup, (3) lets user add/search/delete contacts via input(), (4) saves back to JSON on exit. This exercises everything from Day 1-3: classes, dataclasses, file I/O, JSON, dicts, list comprehensions. Keep it under 80 lines. This is your first 'portfolio' script — you're proving you can write real Python, not just tutorial snippets.",
          },
        ],
        resource:
          "Corey Schafer YouTube — Python OOP Tutorials Playlist (6 videos, ~2h total: youtu.be/ZDa-Z5JzLYM) + Python Official Tutorial Chapter 7: Input and Output (docs.python.org/3/tutorial/inputoutput.html)",
        milestone:
          "Can write Python classes with dunder methods, use dataclasses, read/write JSON and text files, import modules, and build a small CLI application.",
      },

      // ─── DAY 4: Python Power Features (3h) ───
      {
        day: "Day 4",
        hours: "3h",
        title: "Python Power Features",
        subtopics: [
          {
            name: "Lambda Functions",
            time: "15min",
            note: "Dart has '(x) => x * 2' arrow functions. Python has 'lambda x: x * 2'. Lambda is limited to a SINGLE expression — no multi-line body. Used mainly as throwaway functions: 'sorted(users, key=lambda u: u[\"age\"])'. In Dart you'd write 'users.sort((a, b) => a.age.compareTo(b.age))'. Lambda is everywhere in Pandas: 'df.apply(lambda row: row[\"price\"] * row[\"qty\"], axis=1)'. But for anything complex, define a regular function instead — Pythonic style prefers readability over cleverness.",
          },
          {
            name: "map(), filter(), reduce()",
            time: "15min",
            note: "These are functional programming tools from Dart you already know. map(func, iterable): 'list(map(str, [1,2,3]))' gives ['1','2','3']. filter(func, iterable): 'list(filter(lambda x: x>2, [1,2,3,4]))' gives [3,4]. reduce: 'from functools import reduce\\nreduce(lambda a,b: a+b, [1,2,3,4])' gives 10. HOWEVER: in Python, list comprehensions are preferred over map/filter. '[str(x) for x in [1,2,3]]' is more Pythonic than 'list(map(str, [1,2,3]))'. Know both — you'll see map/filter in older code and ML tutorials.",
          },
          {
            name: "Generators & yield",
            time: "20min",
            note: "Generators produce values lazily — one at a time, only when asked. Like Dart's sync*/yield. 'def count_up(n):\\n    for i in range(n):\\n        yield i'. Calling count_up(1000000) does NOT create a million-item list — it creates a generator object that produces values on demand. Use: 'for x in count_up(5): print(x)'. Generator expressions: '(x**2 for x in range(1000000))' — like list comprehension but with () instead of []. Why for AI: when processing millions of data points for training, you can't fit everything in RAM. Generators let you stream data batch by batch. PyTorch's DataLoader uses this exact concept.",
          },
          {
            name: "Decorators",
            time: "25min",
            note: "Decorators wrap a function with extra behavior — like middleware in web frameworks. Syntax: '@decorator' above a function definition. You've already used one: '@dataclass'. A decorator is just a function that takes a function and returns a modified function. Example: 'def timer(func):\\n    def wrapper(*args, **kwargs):\\n        start = time.time()\\n        result = func(*args, **kwargs)\\n        print(f\"Took {time.time()-start:.2f}s\")\\n        return result\\n    return wrapper\\n@timer\\ndef train_model(): ...'. In ML: @torch.no_grad() disables gradient computation, @staticmethod/@classmethod modify class methods. You don't need to write custom decorators yet — just understand them when you see them in ML code.",
          },
          {
            name: "Exception Handling — Custom Exceptions & Best Practices",
            time: "15min",
            note: "You covered try/except on Day 1. Now go deeper: create custom exceptions by inheriting from Exception: 'class DataNotFoundError(Exception): pass'. Use specific exceptions, not bare 'except:'. Chain: 'except ValueError as e: raise RuntimeError(\"Bad data\") from e'. The 'else' clause runs only if no exception: 'try:\\n    data = load()\\nexcept IOError:\\n    handle_error()\\nelse:\\n    process(data)'. In ML, you'll handle FileNotFoundError (missing datasets), ValueError (bad data shapes), and RuntimeError (CUDA/GPU errors). Clean error handling makes your training scripts debuggable.",
          },
          {
            name: "Virtual Environments (venv & pip)",
            time: "20min",
            note: "This is CRITICAL — it's Python's equivalent of Dart's pubspec.yaml but you must set it up manually. EVERY Python project should have its own virtual environment. Create: 'python3 -m venv .venv'. Activate: 'source .venv/bin/activate' (Mac/Linux) or '.venv\\Scripts\\activate' (Windows). Your terminal shows '(.venv)' when active. Install packages: 'pip install numpy pandas'. Freeze: 'pip freeze > requirements.txt'. Restore: 'pip install -r requirements.txt'. Why: different projects need different package versions. Without venvs, installing TensorFlow for one project might break another project's PyTorch. Always, ALWAYS use venvs.",
          },
          {
            name: "*args and **kwargs",
            time: "15min",
            note: "These let functions accept variable numbers of arguments. *args collects positional args as a tuple: 'def add(*args): return sum(args)' then 'add(1,2,3)' gives 6. **kwargs collects keyword args as a dict: 'def config(**kwargs): print(kwargs)' then 'config(lr=0.01, epochs=10)' prints {'lr': 0.01, 'epochs': 10}. In Dart, you use rest parameters less often. In Python ML, **kwargs is EVERYWHERE: model constructors, training configs, plotting functions. When you see 'def train(model, **kwargs):' it means 'pass any extra settings as keyword arguments'.",
          },
          {
            name: "Walrus Operator, Ternary & Python Idioms",
            time: "15min",
            note: "Ternary: 'x = 'big' if n > 10 else 'small'' (Dart: 'var x = n > 10 ? 'big' : 'small'). Walrus operator ':=' (Python 3.8+): assigns AND returns a value: 'if (n := len(data)) > 10: print(f\"got {n} items\")'. Chained comparisons: 'if 0 < x < 100:' (Dart needs: 'if (x > 0 && x < 100)'). 'any()' and 'all()': 'if any(x > 90 for x in scores):' checks if ANY score is above 90. These idioms make your code Pythonic — recognizing them helps you read ML codebases fluently.",
          },
          {
            name: "Practice: Kaggle Learn Python — Lesson 7 (Final Exercise)",
            time: "30min",
            note: "Complete Kaggle Learn Python 'Lesson 7: External Libraries'. This lesson teaches you how to use third-party libraries and ties together everything from the course. Also try to complete the 'Bonus Exercise' if available. After finishing, you should have the Kaggle Python certificate — take a screenshot and save it. It's not a huge credential, but it proves you completed structured Python training and it's your first ML-related certificate.",
          },
        ],
        resource:
          "Kaggle Learn Python — Lessons 6-7 (kaggle.com/learn/python) + Corey Schafer YouTube — 'Python Decorators' (youtu.be/FsAPt_9Bf3U, ~30min) + 'Virtual Environments Tutorial' (youtu.be/Kg1Yvry_Ydk, ~15min)",
        milestone:
          "Can use lambda, generators, decorators, virtual environments, and *args/**kwargs. Has completed the full Kaggle Python course and earned the certificate.",
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════
  // PHASE 2 — Async, Types & Best Practices (Days 5–7, 9h)
  // ═══════════════════════════════════════════════════════════════════════
  {
    phase: "Phase 2",
    title: "Async, Types & Best Practices",
    duration: "Days 5-7",
    hours: "9h",
    emoji: "⚡",
    note: "You already understand async/await deeply from Flutter — Futures, Streams, isolates. Python's async is conceptually the same but the ecosystem is smaller and the event loop is not automatic. This phase also adds type safety back (you probably missed it from Dart!) and teaches you professional Python patterns. By Day 7 you'll write code that looks like a senior Python developer wrote it.",
    topics: [
      // ─── DAY 5: Async Python (3h) ───
      {
        day: "Day 5",
        hours: "3h",
        title: "Async Python — asyncio & Concurrency",
        subtopics: [
          {
            name: "asyncio Fundamentals & Event Loop",
            time: "25min",
            note: "In Dart, the event loop runs automatically — you just 'await' and it works. In Python, you must explicitly start it: 'import asyncio\\nasync def main():\\n    await some_task()\\nasyncio.run(main())'. The asyncio.run() creates an event loop, runs your coroutine, and shuts it down. A coroutine (async def) is like a Dart Future — it represents a value that will be available later. Key difference: in Dart, calling an async function immediately schedules it. In Python, calling 'main()' returns a coroutine OBJECT that does nothing until awaited or passed to asyncio.run().",
          },
          {
            name: "async def / await — Syntax & Behavior",
            time: "20min",
            note: "The syntax is nearly identical to Dart: 'async def fetch(): result = await get_data(); return result'. But there are important differences: (1) You can only 'await' inside an 'async def' (same as Dart). (2) 'await asyncio.sleep(1)' replaces 'await Future.delayed(Duration(seconds: 1))'. (3) There's no equivalent to Dart's '.then()' chaining — Python uses 'await' exclusively. (4) Python async functions return 'coroutine' objects, not Futures. Create a file with 3-4 async functions that await each other to build muscle memory.",
          },
          {
            name: "asyncio.gather() — Concurrent Execution",
            time: "25min",
            note: "This is like Dart's Future.wait(). 'results = await asyncio.gather(fetch_a(), fetch_b(), fetch_c())' runs all three concurrently and returns results in order. If any fails, the whole gather fails (unless you pass 'return_exceptions=True'). Compare: sequential 'a = await fetch_a(); b = await fetch_b()' takes 2 seconds if each takes 1 second. Gather version takes only 1 second. In ML, you'll use this when fetching data from multiple APIs, downloading multiple datasets, or running parallel preprocessing tasks.",
          },
          {
            name: "asyncio.create_task() & Task Management",
            time: "20min",
            note: "create_task() schedules a coroutine to run in the background — like Dart's unawaited() or spawning a Future without awaiting it. 'task = asyncio.create_task(background_job())'. You can await it later: 'result = await task'. Or cancel it: 'task.cancel()'. Use asyncio.wait() for more control: 'done, pending = await asyncio.wait(tasks, timeout=5.0)'. This is useful for timeout patterns: start a download task, wait 5 seconds, cancel if not done.",
          },
          {
            name: "Async Context Managers & Async Iteration",
            time: "20min",
            note: "In Dart you might use StreamController for async iteration. Python has 'async with' and 'async for'. Async context managers: 'async with aiohttp.ClientSession() as session:\\n    async with session.get(url) as response:\\n        data = await response.json()'. Async iterators: 'async for chunk in stream_data():' where stream_data() uses 'yield'. The 'async with' pattern is critical for aiohttp (HTTP client), database connections (asyncpg, aiosqlite), and file operations (aiofiles). It ensures cleanup happens even if exceptions occur.",
          },
          {
            name: "aiohttp — Async HTTP Client (Dart http equivalent)",
            time: "20min",
            note: "Install: 'pip install aiohttp'. Usage: 'import aiohttp\\nasync def fetch(url):\\n    async with aiohttp.ClientSession() as session:\\n        async with session.get(url) as resp:\\n            return await resp.json()'. This is like Dart's http.get() but async-native. For ML: many datasets come from APIs. You might scrape data from multiple URLs concurrently: 'results = await asyncio.gather(*[fetch(url) for url in urls])'. Compare to Dart's dio package — same concept, slightly different API. Also learn 'httpx' library which has both sync and async APIs.",
          },
          {
            name: "Threading vs Multiprocessing vs asyncio",
            time: "20min",
            note: "Python has the GIL (Global Interpreter Lock) — only one thread executes Python code at a time. This is Python's biggest limitation vs Dart isolates. For I/O-bound work (HTTP, file reads): use asyncio (non-blocking, single thread). For CPU-bound work (number crunching, ML training): use multiprocessing (spawns separate processes, bypasses GIL) or just use NumPy/PyTorch which release the GIL internally. Threading is for legacy code or simple parallelism. In practice: ML libraries handle parallelism for you — you rarely write raw threading code. But understanding WHY is important for debugging slow training pipelines.",
          },
          {
            name: "Practice: Async Web Scraper",
            time: "30min",
            note: "Build a script that: (1) takes a list of 5-10 URLs (use httpbin.org endpoints like httpbin.org/delay/1), (2) fetches all of them concurrently with asyncio.gather + aiohttp, (3) measures and prints time taken vs sequential fetching, (4) saves results to a JSON file. You should see ~5x speedup for 5 URLs. This proves you understand async concurrency. Push this to GitHub with a requirements.txt showing aiohttp as a dependency.",
          },
        ],
        resource:
          "Corey Schafer YouTube — 'Python asyncio' (youtu.be/t5Bo1Je9EmE, ~45min) + Python Official Docs — asyncio (docs.python.org/3/library/asyncio.html) + aiohttp docs (docs.aiohttp.org/en/stable/client_quickstart.html)",
        milestone:
          "Can write concurrent Python programs using asyncio, gather, and aiohttp. Understands the GIL and when to use async vs multiprocessing.",
      },

      // ─── DAY 6: Type System & Modern Python (3h) ───
      {
        day: "Day 6",
        hours: "3h",
        title: "Type System & Modern Python",
        subtopics: [
          {
            name: "Type Hints — Basic Annotations",
            time: "20min",
            note: "After 5 days of dynamic typing, let's bring back the safety you love from Dart. Python type hints are OPTIONAL annotations — they don't affect runtime but tools like mypy check them. Basic: 'def greet(name: str) -> str: return f\"Hi {name}\"'. Variables: 'age: int = 24'. Lists: 'scores: list[int] = [90, 85]' (Python 3.9+) or 'from typing import List; scores: List[int]' (older). Dict: 'config: dict[str, float] = {\"lr\": 0.01}'. These hints make your code self-documenting and catch bugs before runtime — just like Dart's type system but opt-in.",
          },
          {
            name: "typing Module — Union, Optional, Any, Callable",
            time: "20min",
            note: "'from typing import Optional, Union, Any, Callable'. Optional[str] means 'str | None' — like Dart's 'String?'. Union[int, str] means either type — like Dart's 'dynamic' but narrower. Any is like Dart's 'dynamic'. Callable[[int, str], bool] means a function taking (int, str) returning bool — like Dart's typedef. Python 3.10+ lets you write 'str | None' instead of Optional[str] and 'int | str' instead of Union[int, str]. In ML codebases you'll see these everywhere: model functions that accept different input types, optional parameters with defaults, callback functions.",
          },
          {
            name: "TypedDict & Literal Types",
            time: "15min",
            note: "TypedDict defines the shape of a dictionary — like a Dart model class but for dicts. 'from typing import TypedDict\\nclass UserData(TypedDict):\\n    name: str\\n    age: int\\n    email: str'. Now 'user: UserData = {\"name\": \"Ranveer\", \"age\": 24, \"email\": \"r@x.com\"}' is type-checked. Literal restricts values: 'mode: Literal[\"train\", \"eval\", \"test\"]' — like a Dart enum but lighter. These appear in ML configs: training mode, optimizer type, dataset split names.",
          },
          {
            name: "Pydantic — Runtime Validation (Like Dart's freezed + json_serializable)",
            time: "25min",
            note: "Install: 'pip install pydantic'. Pydantic is THE library for data validation in Python — used by FastAPI, LangChain, and most AI frameworks. 'from pydantic import BaseModel\\nclass User(BaseModel):\\n    name: str\\n    age: int\\n    email: str'. Create: 'user = User(name=\"Ranveer\", age=24, email=\"r@x.com\")'. It VALIDATES at runtime: User(name=\"Ranveer\", age=\"not_a_number\", email=\"r@x.com\") raises ValidationError. JSON: 'user.model_dump_json()' and 'User.model_validate_json(json_str)'. This is your Dart json_serializable + freezed replacement. You'll use Pydantic in EVERY AI API you build.",
          },
          {
            name: "match/case — Structural Pattern Matching (Python 3.10+)",
            time: "20min",
            note: "This is like Dart's switch expression but more powerful. Basic: 'match command:\\n    case \"quit\": exit()\\n    case \"hello\": greet()\\n    case _: print(\"unknown\")'. Structural matching: 'match point:\\n    case (0, 0): print(\"origin\")\\n    case (x, 0): print(f\"on x-axis at {x}\")\\n    case (x, y): print(f\"at {x},{y}\")'. You can match dicts, classes, nested structures. Guard clauses: 'case x if x > 0: print(\"positive\")'. In ML you'll use this for handling different model types, parsing command-line args, or processing different data formats.",
          },
          {
            name: "Protocol — Structural Typing (Like Dart's implicit interfaces)",
            time: "20min",
            note: "In Dart, every class implicitly defines an interface. Python has Protocol for the same concept — it checks 'does this object have these methods?' without requiring inheritance. 'from typing import Protocol\\nclass Trainable(Protocol):\\n    def train(self, data: list) -> float: ...\\n    def predict(self, x: list) -> list: ...'. Any class with train() and predict() methods satisfies Trainable — no 'implements' keyword needed. This is duck typing formalized. In ML: scikit-learn's estimator API is basically a Protocol — any class with fit() and predict() methods works.",
          },
          {
            name: "mypy — Static Type Checking",
            time: "20min",
            note: "Install: 'pip install mypy'. Run: 'mypy your_file.py'. mypy reads your type annotations and finds bugs WITHOUT running the code — like Dart's analyzer. It catches: wrong argument types, missing return statements, None-related errors, wrong dict key types. Add to VS Code: install 'Mypy Type Checker' extension. Configure in pyproject.toml: '[tool.mypy]\\nstrict = true'. Start lenient and increase strictness as you learn. In professional AI codebases (OpenAI, DeepMind), mypy is mandatory. It's your safety net in a dynamic language.",
          },
          {
            name: "Practice: Refactor Day 3's Contact Manager with Types + Pydantic",
            time: "30min",
            note: "Take your Contact Manager from Day 3 and: (1) Add type hints to every function, (2) Replace the dataclass with a Pydantic BaseModel with validation (email must contain @, phone must be digits), (3) Run mypy and fix all errors, (4) Add a 'from_json/to_json' method using Pydantic's model_validate_json/model_dump_json. This exercise connects your existing code with the new type system and Pydantic — exactly how you'd refactor in a real codebase.",
          },
        ],
        resource:
          "Pydantic V2 Official Docs — Getting Started (docs.pydantic.dev/latest/) + mypy documentation (mypy.readthedocs.io/en/stable/getting_started.html) + ArjanCodes YouTube — 'Python Type Hints' (youtu.be/dgBCEB2jVU0, ~25min)",
        milestone:
          "Can add type hints to all Python code, use Pydantic for data validation, run mypy for static analysis, and use match/case for pattern matching.",
      },

      // ─── DAY 7: Pythonic Patterns & Code Quality (3h) ───
      {
        day: "Day 7",
        hours: "3h",
        title: "Pythonic Patterns, Testing & Code Quality",
        subtopics: [
          {
            name: "Context Managers — with Statement & Custom Contexts",
            time: "15min",
            note: "You've used 'with open(file) as f:' — now understand why. A context manager guarantees cleanup (like Dart's try-finally but cleaner). Write your own: 'from contextlib import contextmanager\\n@contextmanager\\ndef timer():\\n    start = time.time()\\n    yield\\n    print(f\"Elapsed: {time.time()-start:.2f}s\")'. Use: 'with timer():\\n    train_model()'. In ML: context managers manage GPU memory, database connections, temporary files, and model evaluation modes (torch.no_grad()). Understanding them helps you read PyTorch and TensorFlow code fluently.",
          },
          {
            name: "SOLID Principles in Python",
            time: "15min",
            note: "You know SOLID from Dart/Flutter. Apply it in Python: Single Responsibility — one class, one job (a DataLoader shouldn't also clean data). Open/Closed — use base classes and override methods (sklearn's BaseEstimator). Liskov Substitution — any subclass should work where parent is expected. Interface Segregation — use Protocol to define small, focused interfaces. Dependency Injection — pass dependencies as constructor args, not hardcoded imports. In ML: SOLID matters when building training pipelines, data processors, and model architectures that need to be swappable and testable.",
          },
          {
            name: "Logging — The Python logging Module",
            time: "15min",
            note: "Stop using print() for debugging. 'import logging\\nlogging.basicConfig(level=logging.INFO)\\nlogger = logging.getLogger(__name__)\\nlogger.info(\"Training started\")\\nlogger.warning(\"GPU memory low\")\\nlogger.error(\"Model failed to converge\")'. Levels: DEBUG < INFO < WARNING < ERROR < CRITICAL. You can log to files: 'logging.basicConfig(filename=\"training.log\")'. In ML training runs, logging is essential — you need to track metrics, errors, and progress over hours-long training sessions. Every serious ML project uses logging, not print.",
          },
          {
            name: "pytest — Writing Tests",
            time: "25min",
            note: "Install: 'pip install pytest'. Create 'test_math.py': 'def test_add():\\n    assert add(2, 3) == 5\\ndef test_negative():\\n    assert add(-1, 1) == 0'. Run: 'pytest' (auto-discovers test_*.py files). Key features: 'assert' replaces unittest's self.assertEqual. Fixtures: '@pytest.fixture\\ndef sample_data():\\n    return [1,2,3]' then 'def test_sum(sample_data):\\n    assert sum(sample_data) == 6'. Parametrize: '@pytest.mark.parametrize(\"a,b,expected\", [(1,2,3), (0,0,0)])\\ndef test_add(a,b,expected): assert add(a,b) == expected'. In Dart you use flutter_test — pytest is the equivalent but with less boilerplate. Writing tests for your data processing functions catches bugs before they corrupt your training data.",
          },
          {
            name: "Code Formatting — Black, isort, Ruff",
            time: "15min",
            note: "In Dart you use 'dart format'. Python's equivalent is 'Black' (opinionated formatter): 'pip install black && black your_file.py'. 'isort' sorts imports: 'pip install isort && isort your_file.py'. But the modern all-in-one tool is 'Ruff': 'pip install ruff'. Ruff does formatting AND linting at 10-100x the speed of Black+flake8. Configure in pyproject.toml: '[tool.ruff]\\nline-length = 88'. Add VS Code extensions for Black/Ruff. Set 'format on save' in VS Code settings. Clean code matters in AI because ML codebases get messy fast with experimental changes.",
          },
          {
            name: "pyproject.toml — Modern Python Project Config",
            time: "15min",
            note: "This is Python's equivalent of pubspec.yaml. It configures your project metadata, dependencies, and tool settings in one file. Minimal: '[project]\\nname = \"my-project\"\\nversion = \"0.1.0\"\\nrequires-python = \">=3.11\"\\ndependencies = [\"numpy\", \"pandas\"]'. Tool configs go here too: [tool.mypy], [tool.ruff], [tool.pytest.ini_options]. For dependency management, also learn 'Poetry' or 'uv' (faster alternative). Run 'pip install poetry' and 'poetry init' to create a managed project. Every professional Python project has a pyproject.toml — it's non-negotiable.",
          },
          {
            name: "Git & GitHub Workflow for AI Projects",
            time: "25min",
            note: "You already know Git from Flutter development. For AI projects, add these habits: (1) .gitignore must include: __pycache__/, .venv/, *.pyc, .ipynb_checkpoints/, data/ (large datasets), *.h5/*.pt (model weights). Use 'github.com/github/gitignore/blob/main/Python.gitignore' as a template. (2) Use meaningful commit messages: 'feat: add data cleaning pipeline' not 'update files'. (3) Branch strategy: main (stable), dev (experiments), feature/xxx (specific features). (4) GitHub README should describe: what the project does, how to install (pip install -r requirements.txt), how to run, example output. (5) Learn GitHub Actions basics for auto-running tests on push.",
          },
          {
            name: "Practice: Set Up a Professional Python Project Template",
            time: "25min",
            note: "Create a new GitHub repo called 'python-ai-template' with: (1) pyproject.toml with project metadata, (2) src/ directory with an __init__.py and a utils.py module, (3) tests/ directory with test_utils.py using pytest, (4) .gitignore from GitHub's Python template, (5) requirements.txt with numpy, pandas, pytest, ruff, mypy, (6) README.md explaining the project structure. Run: 'ruff check .', 'mypy src/', 'pytest'. All should pass. Push to GitHub. This template is your starting point for every AI project going forward.",
          },
        ],
        resource:
          "pytest Official Docs — Getting Started (docs.pytest.org/en/stable/getting_started.html) + Ruff Documentation (docs.astral.sh/ruff/) + ArjanCodes YouTube — 'How to Set Up a Python Project' (youtu.be/qI3_RjGZJco, ~20min)",
        milestone:
          "Has a professional Python project template on GitHub with tests, linting, type checking, and formatting. Can write pytest tests, use logging, and follow Pythonic coding standards.",
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════
  // PHASE 3 — NumPy & Pandas (Days 8–11, 12h)
  // ═══════════════════════════════════════════════════════════════════════
  {
    phase: "Phase 3",
    title: "NumPy & Pandas",
    duration: "Days 8-11",
    hours: "12h",
    emoji: "🔢",
    note: "This is where your AI journey TRULY begins. NumPy and Pandas are the two libraries you will use in literally EVERY ML project for the rest of your career. NumPy is the math engine (matrices, linear algebra, statistics). Pandas is the data engine (tables, cleaning, transforming). If Python is the language of AI, NumPy and Pandas are its verbs. Spend extra time here — rushing through this phase will haunt you later when neural networks don't make sense because you can't manipulate tensors.",
    topics: [
      // ─── DAYS 8-9: NumPy Deep Dive (6h) ───
      {
        day: "Days 8-9",
        hours: "6h",
        title: "NumPy Deep Dive — The Foundation of All ML Math",
        subtopics: [
          {
            name: "Why NumPy? Python Lists vs NumPy Arrays",
            time: "20min",
            note: "Python lists are slow for math because each element is a full Python object stored separately in memory. NumPy arrays store raw numbers in contiguous memory blocks — like C arrays. This makes them 10-100x faster for numerical operations. Example: multiplying each element in a 1-million-item list by 2 takes ~100ms with a Python loop but ~1ms with NumPy. EVERY ML library (TensorFlow, PyTorch, scikit-learn) is built on NumPy arrays or compatible structures. When you hear 'tensor' in deep learning, think 'multi-dimensional NumPy array'. This is the single most important library in all of data science.",
          },
          {
            name: "Creating Arrays — np.array, zeros, ones, arange, linspace",
            time: "25min",
            note: "Import: 'import numpy as np' (you will type this literally thousands of times). Create from list: 'arr = np.array([1, 2, 3])'. Zeros: 'np.zeros((3, 4))' creates a 3x4 matrix of zeros (note: shape is a TUPLE). Ones: 'np.ones((2, 3))'. Range: 'np.arange(0, 10, 0.5)' like Python's range but supports floats. Linspace: 'np.linspace(0, 1, 100)' creates 100 evenly spaced points between 0 and 1 — used for plotting curves. Random: 'np.random.randn(3, 4)' creates a 3x4 matrix of random normal numbers (used to initialize neural network weights). Identity: 'np.eye(3)' creates 3x3 identity matrix.",
          },
          {
            name: "Array Properties — shape, dtype, ndim, size",
            time: "15min",
            note: "Every array has key properties: .shape returns dimensions as a tuple — (3, 4) means 3 rows, 4 columns. .ndim is number of dimensions (1D=vector, 2D=matrix, 3D+=tensor). .dtype is the data type: float64, int32, etc. .size is total element count. Understanding shapes is CRITICAL: a neural network input might be shape (32, 784) meaning 32 images of 784 pixels each. Shape mismatches cause 90% of beginner ML errors. Practice: create arrays of different shapes and print all 4 properties. Get so comfortable with shapes that you can predict them before running the code.",
          },
          {
            name: "Indexing, Slicing & Boolean Masking",
            time: "30min",
            note: "1D slicing is like Python lists: arr[2:5]. 2D: 'matrix[row, col]' or 'matrix[0:2, 1:3]' (first 2 rows, columns 1-2). This comma-separated indexing is NEW — Python lists don't support it. Boolean masking is incredibly powerful: 'arr[arr > 5]' returns only elements greater than 5. 'matrix[matrix[:, 0] > 10]' returns rows where first column > 10. In Pandas, this becomes: 'df[df[\"age\"] > 25]' — same concept. Boolean masking replaces loops: instead of 'for x in arr: if x > 5: result.append(x)', you write 'arr[arr > 5]'. This is 100x faster and the standard way to filter data in ML.",
          },
          {
            name: "Reshaping — reshape, flatten, ravel, transpose",
            time: "25min",
            note: "reshape() changes array dimensions without changing data: 'np.arange(12).reshape(3, 4)' turns [0..11] into a 3x4 matrix. Use -1 as wildcard: 'arr.reshape(-1, 4)' auto-calculates rows. flatten() makes any array 1D (returns copy). ravel() same but returns view (faster, but modifying it changes original). transpose or .T swaps rows and columns: 'matrix.T'. In neural networks you'll reshape constantly: a 28x28 image becomes a 784-length vector for a dense layer, or a (batch, height, width) tensor gets transposed to (batch, width, height). Wrong reshaping = wrong results, not errors — so be precise.",
          },
          {
            name: "Broadcasting — THE Most Important NumPy Concept",
            time: "40min",
            note: "Broadcasting is how NumPy handles operations between arrays of DIFFERENT shapes — and it's THE concept that makes neural networks work efficiently. Rule 1: If arrays have different ndim, the smaller one is padded with 1s on the LEFT. Rule 2: Arrays with size 1 in a dimension act as if they had the size of the other array in that dimension (the value is 'broadcast' across). Example: 'matrix(3,4) + vector(4,)' works — the vector is broadcast to each row. 'matrix(3,4) + column(3,1)' works — the column is broadcast to each column. But 'matrix(3,4) + vector(3,)' FAILS — shapes don't align. WHY THIS MATTERS FOR AI: in neural networks, adding a bias vector to a batch of inputs uses broadcasting. Normalizing data (subtracting mean, dividing by std) uses broadcasting. Gradient computation uses broadcasting. If you don't understand broadcasting, neural network math will be a black box. PRACTICE: create a (3,4) matrix and try adding arrays of shapes (4,), (3,1), (1,4), (1,), (3,). Predict which work BEFORE running. Check with np.broadcast_shapes().",
          },
          {
            name: "Vectorized Operations — Element-wise & Universal Functions",
            time: "25min",
            note: "Vectorized means 'apply operation to entire array at once, no loops'. All math operators work element-wise: 'a + b', 'a * b', 'a ** 2' all operate on every element. Universal functions (ufuncs): np.sqrt(arr), np.exp(arr), np.log(arr), np.sin(arr), np.abs(arr). Comparison: 'arr > 5' returns boolean array. Logic: np.logical_and(a > 0, a < 10). WHY: neural network activation functions are vectorized operations — sigmoid(x) = 1 / (1 + np.exp(-x)) applied to entire layers at once. If you wrote this with a Python loop it would take hours for large networks. With NumPy it takes milliseconds. NEVER loop over NumPy arrays — always use vectorized operations.",
          },
          {
            name: "Aggregation Functions — sum, mean, std, min, max, argmin, argmax",
            time: "20min",
            note: "np.sum(arr), np.mean(arr), np.std(arr), np.min(arr), np.max(arr) — compute across entire array. The 'axis' parameter is crucial: for a (3,4) matrix, axis=0 aggregates along rows (result shape (4,) — one value per column), axis=1 aggregates along columns (result shape (3,) — one value per row). Think of axis as 'the dimension that disappears'. argmin/argmax return the INDEX of min/max — 'np.argmax(predictions)' gives you the predicted class in classification. np.cumsum() gives running totals. np.percentile(arr, 75) gives the 75th percentile. These are your basic statistics toolkit.",
          },
          {
            name: "Matrix Operations — dot, matmul, @",
            time: "30min",
            note: "Matrix multiplication is THE fundamental operation of neural networks. np.dot(a, b) or a @ b (the @ operator). Rules: (m,n) @ (n,p) = (m,p) — inner dimensions must match. A neural network layer is literally: output = input @ weights + bias. That's it. Practice: create a (3,4) matrix and a (4,2) matrix, multiply them, verify the output shape is (3,2). np.linalg.inv(A) for inverse, np.linalg.det(A) for determinant, np.linalg.eig(A) for eigenvalues. You don't need linear algebra mastery yet — but you MUST be comfortable with matrix multiplication shapes.",
          },
          {
            name: "Random Number Generation — np.random",
            time: "15min",
            note: "ML is built on randomness: weight initialization, data shuffling, train/test splits, dropout. np.random.seed(42) sets reproducibility (ALWAYS set this so experiments are repeatable). np.random.rand(3,4) uniform [0,1). np.random.randn(3,4) standard normal (mean=0, std=1). np.random.randint(0, 10, size=(3,4)) random integers. np.random.choice(arr, size=5, replace=False) samples 5 unique items. np.random.shuffle(arr) shuffles in place. Modern way: 'rng = np.random.default_rng(42); rng.random((3,4))'. The seed 42 is an inside joke in ML — it's from Hitchhiker's Guide to the Galaxy and used as the default random seed everywhere.",
          },
          {
            name: "Stacking, Splitting & Concatenating Arrays",
            time: "15min",
            note: "np.concatenate([a, b], axis=0) stacks vertically (like adding more rows). axis=1 stacks horizontally (adding columns). np.vstack([a, b]) and np.hstack([a, b]) are shortcuts. np.split(arr, 3) splits into 3 equal parts. In ML: you'll concatenate training batches, stack feature arrays, split data into train/validation/test sets. Example: combining features from different sources — 'features = np.hstack([text_features, image_features])' creates a combined feature matrix.",
          },
          {
            name: "Practice: Kaggle Learn — Intro to NumPy Exercise + Neural Network Math Preview",
            time: "40min",
            note: "Do the Kaggle exercise if available, but more importantly: implement a simple neural network forward pass using ONLY NumPy. Steps: (1) Create input matrix X shape (5, 3) — 5 samples, 3 features. (2) Create weight matrix W1 shape (3, 4) and bias b1 shape (4,) randomly. (3) Compute Z1 = X @ W1 + b1 (broadcasting!). (4) Apply ReLU: A1 = np.maximum(0, Z1). (5) Create W2 shape (4, 1) and b2 shape (1,). (6) Compute output = A1 @ W2 + b2. Print shapes at each step. You just built a 2-layer neural network from scratch. If the shapes work out, you understand NumPy well enough for ML.",
          },
        ],
        resource:
          "Kaggle Learn — Intro to Machine Learning Prerequisites: NumPy section + NumPy Official Quickstart (numpy.org/doc/stable/user/quickstart.html) + 3Blue1Brown YouTube — 'Essence of Linear Algebra' playlist (first 4 videos for matrix intuition: youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab)",
        milestone:
          "Can create, reshape, slice, and aggregate NumPy arrays. Understands broadcasting rules and can predict output shapes. Can implement a basic neural network forward pass with matrix multiplication.",
      },

      // ─── DAYS 10-11: Pandas Data Wrangling (6h) ───
      {
        day: "Days 10-11",
        hours: "6h",
        title: "Pandas Data Wrangling — The Data Scientist's Workbench",
        subtopics: [
          {
            name: "Why Pandas? — DataFrames as Spreadsheets in Code",
            time: "15min",
            note: "If NumPy is a calculator, Pandas is Excel — but programmable, faster, and handling millions of rows. A DataFrame is a table with labeled rows and columns (like a SQL table or Excel sheet). In real ML work, data cleaning and preparation is 60-80% of the entire project time. You rarely get clean, ready-to-use data. Pandas is THE tool for loading messy CSV/JSON/SQL data, cleaning it, transforming it, and preparing it for ML models. Every single data science job posting requires Pandas proficiency. Import: 'import pandas as pd' (you'll type this thousands of times alongside 'import numpy as np').",
          },
          {
            name: "Series & DataFrame — Core Data Structures",
            time: "20min",
            note: "A Series is a 1D labeled array (like a column in Excel): 's = pd.Series([10, 20, 30], index=[\"a\", \"b\", \"c\"])'. A DataFrame is a 2D table of Series (like a sheet): 'df = pd.DataFrame({\"name\": [\"Alice\", \"Bob\"], \"age\": [25, 30], \"city\": [\"NYC\", \"LA\"]})'. Each column is a Series. Access column: 'df[\"name\"]' or 'df.name'. DataFrame is like a dict of Series sharing the same index. Key attributes: df.shape (rows, cols), df.columns (column names), df.dtypes (column types), df.index (row labels).",
          },
          {
            name: "Loading Data — read_csv, read_json, read_excel, read_sql",
            time: "20min",
            note: "Load CSV: 'df = pd.read_csv(\"data.csv\")'. This is the function you'll use most. Key parameters: 'sep=\",\"' (delimiter), 'header=0' (which row is header), 'names=[\"col1\", \"col2\"]' (custom column names), 'usecols=[\"name\", \"age\"]' (load only specific columns — saves memory for huge files), 'nrows=1000' (load first 1000 rows for testing), 'dtype={\"id\": str}' (force column types), 'parse_dates=[\"date_col\"]' (auto-parse dates). JSON: 'pd.read_json(\"data.json\")'. Excel: 'pd.read_excel(\"data.xlsx\")' (needs openpyxl: 'pip install openpyxl'). SQL: 'pd.read_sql(query, connection)' — we'll cover this on Day 13.",
          },
          {
            name: "Exploring Data — head, info, describe, value_counts, nunique",
            time: "20min",
            note: "ALWAYS run these 5 commands first when loading any dataset: (1) 'df.head()' — shows first 5 rows (like peeking at the data). (2) 'df.info()' — shows column names, non-null counts, dtypes (immediately reveals missing data). (3) 'df.describe()' — statistics for numeric columns: mean, std, min, 25%, 50%, 75%, max. (4) 'df[\"category_col\"].value_counts()' — counts unique values (shows class distribution for classification). (5) 'df.nunique()' — unique count per column. Also: 'df.shape' for (rows, cols), 'df.columns.tolist()' for column names. This 5-step exploration is your ritual before ANY data work.",
          },
          {
            name: "Selecting Data — loc, iloc, Column Selection",
            time: "25min",
            note: "Column: 'df[\"col\"]' or 'df[[\"col1\", \"col2\"]]' (double brackets for multiple). Row by label: 'df.loc[0]' or 'df.loc[0:5]' (inclusive!). Row by position: 'df.iloc[0]' or 'df.iloc[0:5]' (exclusive, like Python). Both: 'df.loc[0:5, [\"name\", \"age\"]]' (rows 0-5, those columns). iloc uses integer positions: 'df.iloc[0:5, 0:3]' (first 5 rows, first 3 columns). KEY RULE: .loc is label-based (inclusive end), .iloc is position-based (exclusive end). This trips up everyone. Practice: load any CSV and select specific rows and columns using both loc and iloc until the difference is automatic.",
          },
          {
            name: "Filtering Data — Boolean Indexing & query()",
            time: "20min",
            note: "This is NumPy's boolean masking applied to DataFrames. Filter: 'df[df[\"age\"] > 25]' returns rows where age > 25. Multiple conditions: 'df[(df[\"age\"] > 25) & (df[\"city\"] == \"NYC\")]' — MUST use & instead of 'and', and parentheses around each condition. Or: use '|' for OR. The query() method is cleaner: 'df.query(\"age > 25 and city == 'NYC'\")'. isin(): 'df[df[\"city\"].isin([\"NYC\", \"LA\"])]'. between(): 'df[df[\"age\"].between(20, 30)]'. String methods: 'df[df[\"name\"].str.contains(\"Ali\")]'. In ML, filtering is how you subset training data, remove outliers, and select specific classes.",
          },
          {
            name: "Handling Missing Data — isna, fillna, dropna",
            time: "25min",
            note: "Real-world data ALWAYS has missing values. Check: 'df.isna().sum()' shows missing count per column. 'df.isna().sum() / len(df) * 100' shows missing percentage. Strategies: (1) Drop rows: 'df.dropna()' or 'df.dropna(subset=[\"important_col\"])'. (2) Fill with value: 'df[\"age\"].fillna(df[\"age\"].median())' (median is robust to outliers). (3) Fill forward: 'df.fillna(method=\"ffill\")' (time series). (4) Interpolate: 'df.interpolate()'. In ML, how you handle missing data DIRECTLY affects model accuracy. Common approach: if <5% missing, fill with median/mode. If >50% missing, consider dropping the column. NEVER ignore missing data — models will crash or learn wrong patterns.",
          },
          {
            name: "Adding & Modifying Columns",
            time: "15min",
            note: "New column: 'df[\"full_name\"] = df[\"first\"] + \" \" + df[\"last\"]'. Math: 'df[\"age_months\"] = df[\"age\"] * 12'. Conditional: 'df[\"category\"] = np.where(df[\"price\"] > 100, \"expensive\", \"cheap\")'. apply(): 'df[\"name_len\"] = df[\"name\"].apply(len)' or 'df[\"name_upper\"] = df[\"name\"].apply(lambda x: x.upper())'. assign() for chaining: 'df.assign(bmi=lambda d: d[\"weight\"] / (d[\"height\"]/100)**2)'. In ML: feature engineering (creating new columns from existing ones) is one of the most impactful things you can do to improve model performance.",
          },
          {
            name: "Sorting & Ranking",
            time: "10min",
            note: "Sort by column: 'df.sort_values(\"age\")' ascending or 'df.sort_values(\"age\", ascending=False)' descending. Multiple: 'df.sort_values([\"city\", \"age\"], ascending=[True, False])'. Sort by index: 'df.sort_index()'. Rank: 'df[\"age_rank\"] = df[\"age\"].rank()'. nlargest/nsmallest: 'df.nlargest(10, \"score\")' returns top 10 rows by score — faster than sorting entire DataFrame. In ML: you'll sort predictions by confidence, rank features by importance, and find top-N results.",
          },
          {
            name: "GroupBy — Split-Apply-Combine",
            time: "30min",
            note: "GroupBy is Pandas' most powerful feature — like SQL's GROUP BY. 'df.groupby(\"city\")[\"age\"].mean()' gives average age per city. Multiple aggregations: 'df.groupby(\"city\").agg({\"age\": \"mean\", \"salary\": [\"min\", \"max\", \"median\"]})'. Named agg: 'df.groupby(\"city\").agg(avg_age=(\"age\", \"mean\"), total_salary=(\"salary\", \"sum\"))'. Multiple group keys: 'df.groupby([\"city\", \"gender\"])[\"salary\"].mean()'. Transform: 'df[\"salary_zscore\"] = df.groupby(\"city\")[\"salary\"].transform(lambda x: (x - x.mean()) / x.std())' — standardizes salary within each city. In ML: groupby is used for feature aggregation, computing per-group statistics, and understanding data distributions.",
          },
          {
            name: "Merging & Joining DataFrames",
            time: "20min",
            note: "Like SQL JOINs. 'pd.merge(df1, df2, on=\"user_id\")' inner join. 'pd.merge(df1, df2, on=\"user_id\", how=\"left\")' left join (keeps all rows from df1). how options: 'inner', 'left', 'right', 'outer'. Multiple keys: 'on=[\"user_id\", \"date\"]'. Different column names: 'left_on=\"id\", right_on=\"user_id\"'. Concatenate vertically: 'pd.concat([df1, df2])' (stack rows). Horizontally: 'pd.concat([df1, df2], axis=1)'. In ML: you'll merge feature tables from different sources, join user data with behavior data, and combine train/test predictions with ground truth labels.",
          },
          {
            name: "apply() and Vectorized String Operations",
            time: "20min",
            note: "apply() runs a function on each row or column: 'df.apply(lambda row: row[\"price\"] * row[\"qty\"], axis=1)'. axis=0 applies to each column, axis=1 to each row. BUT: apply() with axis=1 is SLOW — it's a hidden loop. Prefer vectorized operations: 'df[\"total\"] = df[\"price\"] * df[\"qty\"]' is 100x faster. String operations use .str accessor: 'df[\"name\"].str.lower()', '.str.contains()', '.str.split()', '.str.replace()', '.str.len()'. DateTime: 'df[\"date\"].dt.year', '.dt.month', '.dt.dayofweek'. These accessors are vectorized and fast.",
          },
          {
            name: "Pivot Tables & Crosstabs",
            time: "15min",
            note: "Pivot table: 'pd.pivot_table(df, values=\"salary\", index=\"department\", columns=\"gender\", aggfunc=\"mean\")' — creates a summary table showing average salary by department and gender. Crosstab: 'pd.crosstab(df[\"dept\"], df[\"gender\"])' counts occurrences. These are for exploratory data analysis (EDA) — understanding patterns in your data before building models. In ML: pivot tables help you understand class distributions, find imbalanced categories, and spot data quality issues.",
          },
          {
            name: "Practice: Kaggle Pandas Course + Real Dataset EDA",
            time: "45min",
            note: "Complete Kaggle Learn 'Intro to Pandas' course (kaggle.com/learn/pandas) — it has 6 lessons with hands-on exercises using real wine review data. After that, download the Titanic dataset from Kaggle (kaggle.com/c/titanic) and perform EDA: (1) Load with read_csv, (2) Run the 5-step exploration ritual, (3) Handle missing Age values with median, (4) Create new features: FamilySize = SibSp + Parch, IsAlone = FamilySize == 0, (5) GroupBy Survived to find survival rates by Sex, Pclass, and Embarked. This Titanic analysis is a rite of passage in data science — everyone does it first.",
          },
        ],
        resource:
          "Kaggle Learn — Pandas Course (kaggle.com/learn/pandas, 6 lessons) + Pandas Official Getting Started (pandas.pydata.org/docs/getting_started/intro_tutorials/) + Corey Schafer YouTube — 'Pandas Tutorial Playlist' (10 videos, ~4h total: youtube.com/playlist?list=PL-osiE80TeTsWmV9i9c58mdDCSskIFdDS)",
        milestone:
          "Can load, explore, clean, filter, group, merge, and transform DataFrames. Has completed the Kaggle Pandas course and performed EDA on the Titanic dataset with feature engineering.",
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════
  // PHASE 4 — Visualization, Jupyter & SQL (Days 12–13, 6h)
  // ═══════════════════════════════════════════════════════════════════════
  {
    phase: "Phase 4",
    title: "Visualization, Jupyter & SQL Basics",
    duration: "Days 12-13",
    hours: "6h",
    emoji: "📊",
    note: "Data visualization is how you communicate insights to others — and to yourself. You can't understand a dataset by staring at numbers alone. Charts reveal patterns, outliers, and distributions that statistics miss. Jupyter notebooks are where 90% of ML experimentation happens. And SQL is the language of databases — every AI company's data lives in SQL databases. This phase rounds out your data toolkit.",
    topics: [
      // ─── DAY 12: Matplotlib & Seaborn (3h) ───
      {
        day: "Day 12",
        hours: "3h",
        title: "Data Visualization with Matplotlib & Seaborn",
        subtopics: [
          {
            name: "Matplotlib Basics — Figure, Axes, plt.plot()",
            time: "25min",
            note: "Install: 'pip install matplotlib'. Import: 'import matplotlib.pyplot as plt'. Basic line plot: 'plt.plot([1,2,3,4], [10,20,25,30]); plt.xlabel(\"X\"); plt.ylabel(\"Y\"); plt.title(\"My Plot\"); plt.show()'. The object-oriented API gives more control: 'fig, ax = plt.subplots(); ax.plot(x, y); ax.set_title(\"Title\")'. Think of Figure as the canvas and Axes as individual chart areas. Multiple plots: 'fig, axes = plt.subplots(1, 2, figsize=(12, 5))' creates 1 row, 2 columns of charts. Save: 'fig.savefig(\"plot.png\", dpi=150, bbox_inches=\"tight\")'. In ML: you'll plot training loss curves, accuracy over epochs, and prediction distributions.",
          },
          {
            name: "Common Plot Types — bar, scatter, hist, box, pie",
            time: "25min",
            note: "Bar chart (category comparison): 'plt.bar(categories, values)'. Scatter plot (relationship between 2 variables): 'plt.scatter(x, y, c=colors, s=sizes, alpha=0.5)' — color and size can encode extra dimensions. Histogram (distribution): 'plt.hist(data, bins=30, edgecolor=\"black\")' — shows how values are distributed. Box plot (distribution summary): 'plt.boxplot(data)' — shows median, quartiles, outliers. Pie chart (proportions): 'plt.pie(sizes, labels=labels, autopct=\"%1.1f%%\")'. For ML: histograms reveal if features are normally distributed (important for some algorithms). Scatter plots show if two features are correlated. Box plots identify outliers you might need to remove.",
          },
          {
            name: "Plot Customization — Colors, Labels, Legends, Styles",
            time: "20min",
            note: "Colors: use named colors ('red', 'steelblue'), hex ('#FF5733'), or colormaps ('plt.cm.viridis'). Line styles: '-' solid, '--' dashed, ':' dotted. Markers: 'o' circle, 's' square, '^' triangle. Legend: 'plt.legend()' after labeling lines with 'label=\"name\"'. Grid: 'plt.grid(True, alpha=0.3)'. Style themes: 'plt.style.use(\"seaborn-v0_8-whitegrid\")' for clean academic look. Annotations: 'plt.annotate(\"peak\", xy=(x,y), xytext=(x+1,y+1), arrowprops=dict(arrowstyle=\"->\"))'. Professional plots matter — your portfolio projects will be judged on visualization quality.",
          },
          {
            name: "Seaborn — Statistical Visualization",
            time: "30min",
            note: "Install: 'pip install seaborn'. Import: 'import seaborn as sns'. Seaborn is built on Matplotlib but makes statistical plots easy. Distribution: 'sns.histplot(df[\"age\"], kde=True)' — histogram with density curve. Relationship: 'sns.scatterplot(data=df, x=\"age\", y=\"income\", hue=\"gender\")' — auto-colors by category. Categorical: 'sns.boxplot(data=df, x=\"department\", y=\"salary\")'. Pairplot: 'sns.pairplot(df, hue=\"species\")' — scatter plots for ALL variable pairs (essential for EDA). The key advantage: Seaborn works directly with Pandas DataFrames — just pass column names as strings instead of extracting arrays.",
          },
          {
            name: "Heatmaps — Correlation Matrices",
            time: "20min",
            note: "Heatmaps visualize matrices with colors. THE most important use: correlation heatmap. 'corr = df.select_dtypes(include=\"number\").corr()\\nsns.heatmap(corr, annot=True, cmap=\"coolwarm\", center=0, fmt=\".2f\")'. This shows how every numeric column relates to every other. Values near +1 mean strong positive correlation, near -1 means strong negative, near 0 means no correlation. In ML: if two features are highly correlated (>0.9), you might drop one (multicollinearity). The correlation heatmap is usually the FIRST chart in any ML notebook's EDA section.",
          },
          {
            name: "Subplots & Multi-Panel Figures",
            time: "15min",
            note: "Create grid layouts: 'fig, axes = plt.subplots(2, 3, figsize=(15, 10))'. Access: axes[0, 0] for top-left. Plot on specific axis: 'sns.histplot(df[\"age\"], ax=axes[0, 0])'. Tight layout: 'plt.tight_layout()' prevents overlap. Shared axes: 'plt.subplots(2, 2, sharex=True, sharey=True)'. In data science notebooks, you'll often create a 2x2 or 3x3 grid showing different aspects of the data — distributions, relationships, categorical breakdowns — all in one figure. This makes your EDA comprehensive and professional.",
          },
          {
            name: "Practice: EDA Dashboard on Titanic Dataset",
            time: "45min",
            note: "Create a complete EDA visualization for the Titanic dataset from Day 10-11: (1) Survival rate bar chart by Pclass, Sex, and Embarked, (2) Age distribution histogram with KDE, colored by Survived, (3) Correlation heatmap of all numeric features, (4) Box plot of Fare by Pclass, (5) Pairplot of Age, Fare, SibSp colored by Survived. Arrange as a 2x3 subplot grid with proper titles, labels, and a main suptitle. Save as 'titanic_eda.png' at 150 DPI. This is portfolio-quality work — push it to your GitHub repo.",
          },
        ],
        resource:
          "Kaggle Learn — Data Visualization Course (kaggle.com/learn/data-visualization, 6 lessons) + Matplotlib Official Tutorials (matplotlib.org/stable/tutorials/index.html) + Seaborn Gallery for inspiration (seaborn.pydata.org/examples/index.html)",
        milestone:
          "Can create professional multi-panel visualizations with Matplotlib and Seaborn. Has produced a complete EDA visualization dashboard for the Titanic dataset.",
      },

      // ─── DAY 13: Jupyter Mastery + SQL Fundamentals (3h) ───
      {
        day: "Day 13",
        hours: "3h",
        title: "Jupyter Mastery + SQL Fundamentals",
        subtopics: [
          {
            name: "Jupyter Notebook Setup & Interface",
            time: "15min",
            note: "Install: 'pip install jupyterlab'. Launch: 'jupyter lab' (opens in browser). Create a new notebook (.ipynb file). A notebook has cells — code cells (run Python) and markdown cells (write formatted text). Run cell: Shift+Enter. Insert cell: press 'b' (below) or 'a' (above) in command mode. Delete: press 'dd'. This is where 90% of ML experimentation happens because you can run code in chunks, see outputs inline (including charts!), and document your thinking. Think of it as a live document — part code, part report. VS Code also has excellent Jupyter support: install the 'Jupyter' extension.",
          },
          {
            name: "Jupyter Magic Commands",
            time: "15min",
            note: "Magic commands start with % (line) or %% (cell). Essential ones: '%timeit x = sum(range(1000))' — benchmarks execution time (run it on NumPy vs Python loops to see the speed difference). '%%time' at top of cell times the entire cell. '%matplotlib inline' makes plots appear in notebook (usually auto-enabled in JupyterLab). '%who' lists all variables. '%whos' lists variables with types and values. '!pip install pandas' runs shell commands from notebook. '%load_ext autoreload' + '%autoreload 2' auto-reloads imported modules when you change their source files — essential during development.",
          },
          {
            name: "Google Colab — Free GPU Access",
            time: "15min",
            note: "Go to colab.research.google.com — it's free Jupyter notebooks in the cloud with FREE GPU access (Tesla T4, up to 12h sessions). Sign in with Google account. You get 12.7GB RAM and optional GPU/TPU. To enable GPU: Runtime → Change runtime type → GPU. This is where you'll train neural networks for FREE. Upload datasets or connect to Google Drive: 'from google.colab import drive; drive.mount(\"/content/drive\")'. Key limitation: sessions expire after ~90 minutes of inactivity and 12 hours max. Always save your work to Drive or download .ipynb files. For Month 2 onwards, Colab will be your primary training environment.",
          },
          {
            name: "Notebook Best Practices & Markdown",
            time: "10min",
            note: "Structure your notebooks professionally: (1) Title cell (markdown) with project name and date. (2) Import cell — ALL imports in one cell at the top. (3) Configuration cell — constants, file paths, hyperparameters. (4) Section headers in markdown: '## Data Loading', '## EDA', '## Feature Engineering', '## Model Training'. (5) Explain your reasoning in markdown cells between code cells. (6) Use 'Restart Kernel and Run All' before sharing — ensures cells work in order. Bad notebooks have random cell execution order and no documentation. Good notebooks read like a story from top to bottom.",
          },
          {
            name: "SQL — SELECT, WHERE, ORDER BY (The Basics)",
            time: "25min",
            note: "SQL (Structured Query Language) is how you get data from databases — and almost ALL company data lives in SQL databases. You WILL be asked SQL in AI job interviews. Install: 'pip install sqlite3' (built-in actually) or use sqliteonline.com to practice. Basic queries: 'SELECT name, age FROM users' — get specific columns. 'SELECT * FROM users WHERE age > 25' — filter rows. 'SELECT * FROM users ORDER BY age DESC' — sort. 'SELECT * FROM users WHERE city IN (\"NYC\", \"LA\") AND age BETWEEN 20 AND 30' — compound filters. 'SELECT DISTINCT city FROM users' — unique values. 'SELECT * FROM users LIMIT 10' — first 10 rows. Think of SELECT as Pandas df[[columns]], WHERE as df[condition], ORDER BY as df.sort_values().",
          },
          {
            name: "SQL — GROUP BY, Aggregations & HAVING",
            time: "20min",
            note: "GROUP BY is SQL's equivalent of Pandas groupby(). 'SELECT city, AVG(age), COUNT(*) FROM users GROUP BY city' — average age and count per city. Aggregations: COUNT(), SUM(), AVG(), MIN(), MAX(). HAVING filters groups (WHERE filters rows): 'SELECT city, COUNT(*) as cnt FROM users GROUP BY city HAVING cnt > 100' — only cities with 100+ users. Aliases: 'SELECT city, AVG(salary) AS avg_salary FROM employees GROUP BY city ORDER BY avg_salary DESC'. In ML: you'll write SQL to extract training data from company databases — 'give me all users who purchased in the last 30 days with their total spend, grouped by category'.",
          },
          {
            name: "SQL — JOIN (Combining Tables)",
            time: "20min",
            note: "JOIN combines data from multiple tables — like pd.merge(). 'SELECT u.name, o.product FROM users u INNER JOIN orders o ON u.id = o.user_id' — matches users with their orders. Types: INNER JOIN (only matching rows), LEFT JOIN (all from left table + matching from right — most common), RIGHT JOIN (opposite), FULL OUTER JOIN (all rows from both). In ML: your training data often spans multiple tables. Example: user features from 'users' table, purchase history from 'orders' table, product details from 'products' table. A single SQL query joining all three gives you a ready-to-model dataset. Practice: 'SELECT u.name, COUNT(o.id) as num_orders FROM users u LEFT JOIN orders o ON u.id = o.user_id GROUP BY u.name' — users with their order counts.",
          },
          {
            name: "SQL — Subqueries & Common Patterns",
            time: "15min",
            note: "Subqueries are queries inside queries: 'SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users)' — users older than average. IN subquery: 'SELECT * FROM users WHERE id IN (SELECT user_id FROM orders WHERE amount > 1000)' — users with high-value orders. EXISTS: 'SELECT * FROM products WHERE EXISTS (SELECT 1 FROM orders WHERE orders.product_id = products.id)' — products that have been ordered. Common Table Expressions (CTE) for readability: 'WITH high_spenders AS (SELECT user_id, SUM(amount) as total FROM orders GROUP BY user_id HAVING total > 5000) SELECT u.name, h.total FROM users u JOIN high_spenders h ON u.id = h.user_id'. Practice these on sqliteonline.com or Mode Analytics SQL tutorial.",
          },
          {
            name: "Pandas + SQL Integration — pd.read_sql()",
            time: "15min",
            note: "The bridge between SQL databases and Python: 'import sqlite3\\nconn = sqlite3.connect(\"database.db\")\\ndf = pd.read_sql(\"SELECT * FROM users WHERE age > 25\", conn)'. Now you have a Pandas DataFrame from a SQL query! You can also write DataFrames to SQL: 'df.to_sql(\"table_name\", conn, if_exists=\"replace\")'. For practice: create a SQLite database, load a CSV into it with to_sql(), then query it with read_sql(). In production ML, you'll connect to PostgreSQL or MySQL: 'pip install sqlalchemy psycopg2' and use SQLAlchemy connection strings. This SQL-to-Pandas pipeline is how most real ML projects start.",
          },
          {
            name: "Practice: SQL + Jupyter Combined Exercise",
            time: "30min",
            note: "In a Jupyter notebook: (1) Load the Titanic CSV into a SQLite database using pd.to_sql(). (2) Write SQL queries to answer: What is the survival rate by passenger class? What is the average fare for survivors vs non-survivors? Which embarkation port had the highest survival rate? How many passengers have family size > 3? (3) Use pd.read_sql() to load results into DataFrames. (4) Visualize the SQL results with Seaborn charts. (5) Add markdown explanations for each finding. This exercise proves you can work the full pipeline: database → SQL → Pandas → visualization.",
          },
        ],
        resource:
          "Kaggle Learn — Intro to SQL Course (kaggle.com/learn/intro-to-sql, 6 lessons using BigQuery) + Mode Analytics SQL Tutorial (mode.com/sql-tutorial/) + JupyterLab Documentation (jupyterlab.readthedocs.io/en/stable/getting_started/overview.html)",
        milestone:
          "Can use Jupyter notebooks professionally, leverage Google Colab for free GPU access, write SQL queries with JOINs and GROUP BY, and bridge SQL data into Pandas for analysis.",
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════
  // PHASE 5 — Capstone Project (Day 14, 4h)
  // ═══════════════════════════════════════════════════════════════════════
  {
    phase: "Phase 5",
    title: "Capstone Project — End-to-End Data Analysis",
    duration: "Day 14",
    hours: "4h",
    emoji: "🏆",
    note: "This is where you PROVE you learned everything. You will take a real dataset from Kaggle, perform complete exploratory data analysis, clean the data, compute statistics, create visualizations, and push everything to GitHub as a polished Jupyter notebook. This is your first portfolio piece — future employers will look at this. Treat it like a job interview submission. No shortcuts, no sloppy charts, no missing documentation.",
    topics: [
      {
        day: "Day 14",
        hours: "4h",
        title: "End-to-End Data Analysis Capstone",
        subtopics: [
          {
            name: "Choose & Download a Kaggle Dataset",
            time: "15min",
            note: "Go to kaggle.com/datasets and pick a dataset that interests you. Good beginner choices: 'World Happiness Report' (kaggle.com/datasets/unsdsn/world-happiness), 'Netflix Movies and TV Shows' (kaggle.com/datasets/shivamb/netflix-shows), 'Spotify Top 50' (kaggle.com/datasets/atillacolak/top-50-spotify-tracks-2020), 'Student Performance' (kaggle.com/datasets/spscientist/students-performance-in-exams), or 'House Prices' (kaggle.com/c/house-prices-advanced-regression-techniques). Pick something you genuinely find interesting — curiosity drives better analysis. Download the CSV and create a new Jupyter notebook.",
          },
          {
            name: "Project Setup & Data Loading",
            time: "15min",
            note: "Create a new directory: 'capstone-month1-eda/'. Inside, create: 'analysis.ipynb' (main notebook), 'data/' folder for the CSV, '.gitignore' (ignore .ipynb_checkpoints, __pycache__, .venv). In the notebook: first cell is a title markdown cell with project name, date, your name, and a one-paragraph description of what you're analyzing and why. Second cell: all imports (numpy, pandas, matplotlib, seaborn, optional: sqlite3). Third cell: 'df = pd.read_csv(\"data/your_file.csv\")' and 'df.shape, df.columns.tolist()'. This professional structure shows employers you know how to organize work.",
          },
          {
            name: "Data Exploration — The 5-Step Ritual",
            time: "20min",
            note: "Run the 5-step ritual from Day 10: (1) df.head(10), (2) df.info(), (3) df.describe(), (4) value_counts on categorical columns, (5) df.nunique(). Add a markdown cell AFTER each one explaining what you observe. Example: 'The dataset has 7,787 rows and 12 columns. There are 2,389 missing values in the \"director\" column (30.7%), which we will need to address. The \"type\" column shows 69.6% Movies and 30.4% TV Shows.' This narration demonstrates analytical thinking — interviewers look for this.",
          },
          {
            name: "Data Cleaning & Preprocessing",
            time: "30min",
            note: "Based on your exploration, clean the data: (1) Handle missing values — document your strategy for each column (drop, fill median, fill mode, fill 'Unknown'). (2) Fix data types — dates should be datetime, categories should be categorical. (3) Remove duplicates: 'df.drop_duplicates()'. (4) Handle outliers — use IQR method: 'Q1 = df[\"col\"].quantile(0.25); Q3 = df[\"col\"].quantile(0.75); IQR = Q3 - Q1; df = df[(df[\"col\"] >= Q1 - 1.5*IQR) & (df[\"col\"] <= Q3 + 1.5*IQR)]'. (5) Create at least 2 new features (e.g., year from date, age group from age, price category from price). Document EVERY decision in markdown.",
          },
          {
            name: "Statistical Analysis with NumPy",
            time: "25min",
            note: "Compute and report: (1) Mean, median, mode, std for key numeric columns. (2) Correlation matrix: 'df.corr()' — identify the top 3 most correlated feature pairs. (3) Group-wise statistics: use groupby to compare segments (e.g., average salary by department, average rating by genre). (4) Percentile analysis: 'np.percentile(df[\"col\"], [10, 25, 50, 75, 90])'. (5) At least one hypothesis test or interesting statistical observation (e.g., 'movies released after 2015 have 23% higher ratings on average than pre-2015 movies'). Use NumPy functions directly: np.mean(), np.std(), np.corrcoef(). Show the numbers AND explain what they mean.",
          },
          {
            name: "Visualization Dashboard — 6+ Charts",
            time: "45min",
            note: "Create at minimum 6 visualizations: (1) Distribution plot (histogram + KDE) of a key numeric variable. (2) Bar chart comparing categories. (3) Scatter plot showing relationship between 2 numeric variables. (4) Heatmap of correlation matrix. (5) Box plot comparing distributions across groups. (6) Time series or trend line if your data has dates. Bonus: pairplot, violin plot, or stacked bar chart. EVERY chart must have: title, axis labels, legend (if applicable), and a markdown cell explaining the insight. Use a consistent color palette: 'sns.set_palette(\"husl\")'. Save the best chart as a standalone PNG for the README.",
          },
          {
            name: "Key Findings & Insights — Write the Story",
            time: "20min",
            note: "Add a '## Key Findings' markdown section at the end of the notebook with 5-7 bullet points summarizing your discoveries. Example: '1. Movies released in December have 15% higher viewership than the yearly average, suggesting a holiday effect. 2. There is a strong negative correlation (-0.72) between price and quantity sold. 3. The \"Drama\" genre dominates with 37% of all titles, but \"Documentary\" has the highest average rating (7.8/10).' Each finding should be specific (include numbers), surprising (not obvious), and actionable (someone could make a decision based on it). This section is what employers read first — it shows you can extract VALUE from data, not just make charts.",
          },
          {
            name: "GitHub Push — README, Structure & Portfolio Presentation",
            time: "30min",
            note: "Push to GitHub with this structure: README.md must contain: (1) Project title and one-line description. (2) '## Dataset' — source link, size, what it contains. (3) '## Key Findings' — your 5-7 bullet points from above. (4) '## Visualizations' — embed 2-3 of your best charts as images (save PNGs, reference in README with '![Chart](images/chart.png)'). (5) '## Tech Stack' — Python 3.12, NumPy, Pandas, Matplotlib, Seaborn, Jupyter. (6) '## How to Run' — clone, install requirements, launch jupyter. (7) '## Author' — your name and LinkedIn/GitHub profile. Make the README visually appealing with headers, bullet points, and embedded images. This is your first data science portfolio piece — recruiters will see it on your GitHub profile.",
          },
        ],
        resource:
          "Kaggle Datasets (kaggle.com/datasets — browse by 'Most Votes' for well-documented datasets) + GitHub Guide: Making READMEs (docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes) + Jupyter nbviewer (nbviewer.org — renders notebooks beautifully for sharing)",
        milestone:
          "Has a complete, polished EDA project on GitHub with clean data, statistical analysis, 6+ visualizations, documented insights, and a professional README. This is portfolio piece #1.",
      },
    ],
  },
];
