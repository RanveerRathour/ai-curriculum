// ─── SUPPLEMENTARY DATA ───
// Supporting constants for the AI/ML Learning Curriculum
// These provide study methodology, portfolio guidance, weekly checkpoints,
// community resources, and interview preparation material.

// ─── 1. STUDY GUIDE ───
// Array of study tips and methodology objects covering six essential categories.
const studyGuide = [
  {
    title: "Daily Routine",
    icon: "⏰",
    tips: [
      "Study 3 hours minimum per day. Best split: 1h theory (watch/read) → 1h hands-on coding → 1h building projects. Morning is best for theory, evening for coding.",
      "Block your study time in your calendar like a meeting — non-negotiable. Treat it as your job because it IS your future job.",
      "Start each session by spending 5 minutes reviewing yesterday's notes. Spaced repetition is the fastest way to move knowledge into long-term memory.",
      "End each session by writing a 3-bullet summary of what you learned today. If you can't summarize it, you didn't understand it.",
      "On weekends, dedicate one longer 4-5 hour block to building portfolio projects. Weekdays are for learning, weekends are for building.",
      "Track your hours in a simple spreadsheet or Notion table. Aim for 21+ hours per week. Seeing the numbers climb is incredibly motivating.",
      "Take a 10-minute break every 50 minutes (Pomodoro technique). Walk around, drink water, stretch. Your brain consolidates learning during breaks.",
      "Keep a 'parking lot' note for random questions that pop up during study. Don't chase rabbit holes — write them down and research during break time."
    ]
  },
  {
    title: "How to Watch Tutorials",
    icon: "🎥",
    tips: [
      "Never just watch. Always code along. Pause the video, try to predict what comes next. After finishing a tutorial, close it and rebuild the project from memory.",
      "Watch at 1.25x–1.5x speed for overviews, then slow down to 1x when coding along. If you don't understand at 1x, rewind and watch again.",
      "Before starting a tutorial, skim the description and timestamps. Write down what you expect to learn. This primes your brain to absorb the right information.",
      "After every 10-15 minute chunk, pause and explain what you just learned out loud (rubber duck method). If you stumble, rewatch that section.",
      "Don't binge-watch tutorials like Netflix. One tutorial → code it → break → next. Tutorial hell is watching 50 hours and building nothing.",
      "If a tutorial uses a dataset or API you don't have, don't skip it — find a similar free dataset on Kaggle and adapt. The adaptation IS the learning.",
      "Keep a 'tutorial log' — title, date, what you built, what was confusing. When you revisit topics later, you'll know exactly where to look."
    ]
  },
  {
    title: "How to Read Documentation",
    icon: "📖",
    tips: [
      "Don't read docs cover to cover. Search for what you need. Read the Getting Started + quickstart first. Bookmark the API reference for later.",
      "Every major library (scikit-learn, PyTorch, LangChain) has a 'Getting Started' or '10-minute intro.' Do those FIRST before diving into advanced docs.",
      "When you hit an unfamiliar function, read its docstring and look at the 'Examples' section. Most Python docs have runnable examples — run them.",
      "Use the docs search bar aggressively. Don't scroll through pages. Type what you need: 'fit_transform', 'cosine_similarity', 'TextSplitter'.",
      "Compare documentation to a recipe book: you don't read the whole book to make one dish. Find your recipe, follow it, and explore neighbors later.",
      "When docs are confusing (they often are), search YouTube for '[library name] [function name] tutorial'. Someone has explained it more simply.",
      "Bookmark these docs — you'll use them daily: Python docs, NumPy, Pandas, scikit-learn, PyTorch, HuggingFace Transformers, LangChain, FastAPI."
    ]
  },
  {
    title: "How to Debug & Get Unstuck",
    icon: "🐛",
    tips: [
      "1) Read the error message carefully (80% of the answer is there). 2) Google the exact error message in quotes. 3) Check Stack Overflow. 4) Ask ChatGPT/Claude with the full error + your code. 5) Take a 10-minute break, then re-read your code.",
      "When Googling errors, paste the EXACT error message in quotes. Add the library name. Example: \"ValueError: could not convert string to float\" pandas",
      "Use print() debugging liberally. Print the shape of your tensors/arrays, the type of your variables, and the first few rows of your data at every step.",
      "If you're stuck for more than 30 minutes on one bug, STOP. Describe the problem in writing (what you expected vs. what happened). Often writing it out reveals the answer.",
      "Learn to read stack traces bottom-to-top. The last line is the error. The lines above show you the path the code took to get there. YOUR code is usually the culprit, not the library.",
      "When asking for help (online or to AI), always include: 1) What you're trying to do, 2) What you tried, 3) The full error message, 4) Your relevant code. This is called a Minimum Reproducible Example.",
      "Keep a 'bug journal' of errors you've solved. You WILL encounter the same errors again. Having your own solutions documented saves hours over a 4-month period."
    ]
  },
  {
    title: "How to Take Notes",
    icon: "📝",
    tips: [
      "Use Obsidian or Notion. Create a 'learning journal' — after each day, write 3 things you learned in YOUR OWN words. This forces understanding, not just copying.",
      "Structure your notes with the Cornell method: main notes on the right, key terms/questions on the left, summary at the bottom. This works brilliantly for ML concepts.",
      "For every ML algorithm you learn, create a 'cheat card': Name, What it does (1 sentence), When to use it, Key hyperparameters, Code snippet, Common pitfalls.",
      "Draw diagrams. Neural network architectures, data pipelines, RAG workflows — if you can't draw it, you don't understand it. Use Excalidraw or pen and paper.",
      "Create an 'Interview Answers' note from day one. Every time you learn something interviewable, write a concise 2-3 sentence answer. By month 4, you'll have 50+ ready answers.",
      "Link your notes together (Obsidian's backlinks are perfect for this). Connect 'gradient descent' to 'backpropagation' to 'neural networks'. Knowledge is a graph, not a list.",
      "Review your notes weekly. Every Sunday, spend 30 minutes re-reading the week's notes and adding connections. This single habit 3x's your retention."
    ]
  },
  {
    title: "Mindset & Motivation",
    icon: "💪",
    tips: [
      "Some days will feel impossible. That's normal. The confusion IS the learning. Every expert was once a confused beginner. Your family is counting on you — let that fuel you, not pressure you.",
      "You already have a massive advantage: you're a Flutter developer. You understand APIs, state management, async code, and building products. Most ML learners start from zero.",
      "Compare yourself to yourself one week ago, never to someone who's been doing this for 5 years. Progress is invisible day-to-day but massive month-to-month.",
      "When imposter syndrome hits (it will), remember: companies don't hire people who know everything. They hire people who can learn, build, and ship. That's you.",
      "Celebrate small wins. First time your model beats random guessing? Celebrate. First Kaggle submission? Celebrate. First API endpoint serving predictions? Huge celebration.",
      "Find one study buddy or accountability partner. Share daily updates. Having someone who knows you're supposed to be studying makes you 10x more consistent.",
      "Your 4-month timeline is tight but realistic. People have landed ML roles in less time. The difference between those who make it and those who don't is consistency, not talent.",
      "When you feel overwhelmed, zoom out. You're not learning 'all of AI.' You're learning a specific, practical path: Python → data → ML → deep learning → LLMs → deploy. One step at a time."
    ]
  }
];

// ─── 2. PORTFOLIO PIECES ───
// Enhanced array of 5 portfolio projects with detailed requirements and interview guidance.
const portfolioPieces = [
  {
    num: "01",
    title: "Exploratory Data Analysis Notebook",
    when: "Complete by Day 14 (End of Week 2)",
    color: "#3B82F6",
    tag: "Python, Pandas, NumPy, Matplotlib, Seaborn, Jupyter",
    description:
      "A polished Jupyter notebook that takes a real-world dataset (from Kaggle or UCI ML Repository), cleans messy data, performs thorough exploratory analysis, and tells a compelling story through visualizations. This demonstrates you can work with data — the foundational skill every ML role requires.",
    requirements: [
      "Use a real-world dataset with at least 10,000 rows and 10+ columns (e.g., Titanic, House Prices, or a domain-specific dataset)",
      "Handle missing values with at least 2 different strategies (imputation, dropping) and justify your choices",
      "Perform feature engineering — create at least 3 new meaningful features from existing columns",
      "Create at least 8 publication-quality visualizations: distribution plots, correlation heatmaps, scatter plots, box plots, pair plots",
      "Include a markdown narrative throughout the notebook explaining your thought process, not just code",
      "Compute summary statistics and identify outliers using IQR or Z-score methods",
      "Export clean data as CSV and document the cleaning pipeline so it's reproducible",
      "Add a 'Key Findings' section at the end with 5+ actionable insights from the data",
      "Host the notebook on GitHub with a README that includes sample visualizations"
    ],
    interviewStory:
      "Talk about this as your data intuition project. Say: 'Before I built any models, I wanted to deeply understand data workflows. I took [dataset name], which had real-world messiness — missing values, outliers, mixed types. I cleaned it using Pandas, engineered features like [example], and discovered [specific insight] through visualization. This taught me that 80% of ML is data preparation, and I carry that mindset into every project.'"
  },
  {
    num: "02",
    title: "End-to-End ML Pipeline with Kaggle Submission",
    when: "Complete by Month 2 (Day 45-60)",
    color: "#8B5CF6",
    tag: "scikit-learn, PyTorch, XGBoost, Pandas, Weights & Biases, Kaggle",
    description:
      "A complete machine learning pipeline that goes from raw data to a competitive Kaggle leaderboard submission. Includes data preprocessing, feature engineering, model selection, hyperparameter tuning, and experiment tracking. This shows you can build production-quality ML workflows, not just toy examples.",
    requirements: [
      "Choose an active Kaggle competition or a classic benchmark (House Prices, Digit Recognizer, or Spaceship Titanic)",
      "Build a full sklearn Pipeline with ColumnTransformer for preprocessing (scaling, encoding, imputation)",
      "Train and compare at least 4 different models: Linear/Logistic Regression, Random Forest, XGBoost, and a simple Neural Network (PyTorch)",
      "Implement proper cross-validation (K-Fold or Stratified K-Fold) — never evaluate on training data",
      "Perform hyperparameter tuning with GridSearchCV or Optuna on your top 2 models",
      "Track all experiments with Weights & Biases (or MLflow): log metrics, parameters, and plots",
      "Create an ensemble or stacking model that combines your best performers",
      "Submit to Kaggle and document your leaderboard score and percentile ranking",
      "Write a clean README with a model comparison table showing precision, recall, F1, and AUC for each model",
      "Include a 'What I Would Do With More Time' section — interviewers love this"
    ],
    interviewStory:
      "Frame this as your ML engineering depth project. Say: 'I built a complete ML pipeline for [competition name]. I started with EDA, then built a preprocessing pipeline using sklearn's ColumnTransformer. I compared 4 model families — from logistic regression to XGBoost to a PyTorch neural net. I tracked every experiment in W&B, tuned hyperparameters with Optuna, and achieved top [X]% on Kaggle. The biggest lesson was that feature engineering and proper validation mattered more than model complexity.'"
  },
  {
    num: "03",
    title: "RAG Chatbot Over PDF Documents",
    when: "Complete by Month 3 (Day 70-85)",
    color: "#10B981",
    tag: "LangChain, ChromaDB, OpenAI API, FastAPI, Streamlit, PyPDF2",
    description:
      "A Retrieval-Augmented Generation chatbot that ingests PDF documents, chunks and embeds them into a vector database, and answers questions with cited sources. Includes a web UI and API backend. This is THE project that makes you hireable for LLM/AI engineer roles — every company wants someone who can build RAG systems.",
    requirements: [
      "Build a document ingestion pipeline: PDF upload → text extraction → chunking (experiment with chunk sizes 256/512/1024) → embedding → vector store",
      "Use LangChain for orchestration, ChromaDB (or Pinecone free tier) for vector storage, and OpenAI or a local LLM for generation",
      "Implement at least 2 chunking strategies (fixed-size with overlap, recursive character splitting) and compare retrieval quality",
      "Add metadata filtering — allow users to filter by document name, page number, or date",
      "Implement hybrid search: combine vector similarity search with BM25 keyword search for better retrieval",
      "Build a FastAPI backend with endpoints: POST /upload, POST /query, GET /documents, DELETE /document/{id}",
      "Create a Streamlit or Gradio frontend with chat interface, document upload, and source citation display",
      "Add conversation memory so the chatbot can handle follow-up questions using chat history",
      "Implement basic evaluation: test with 20+ question-answer pairs and measure retrieval accuracy and answer quality",
      "Deploy to a free tier (Railway, Render, or HuggingFace Spaces) with a live demo link",
      "Write comprehensive API documentation with example requests and responses"
    ],
    interviewStory:
      "This is your star project — lead every interview with it. Say: 'I built a production-ready RAG system from scratch. Users upload PDFs, which get chunked and embedded into ChromaDB. When they ask questions, I use hybrid search — combining semantic similarity with BM25 keyword matching — to retrieve the most relevant chunks, then pass them to an LLM with a carefully engineered prompt. I experimented with chunk sizes and found that 512 tokens with 50-token overlap gave the best results for my use case. The system handles follow-up questions through conversation memory and always cites its sources with page numbers. I deployed it on [platform] with a FastAPI backend and Streamlit frontend.'"
  },
  {
    num: "04",
    title: "Flutter AI Mobile App with Streaming",
    when: "Complete by Month 4 (Day 95-110)",
    color: "#F59E0B",
    tag: "Flutter, Dart, FastAPI, Python, Server-Sent Events, WebSockets, OpenAI API, Firebase",
    description:
      "A production-quality Flutter mobile app that connects to your own AI backend, featuring real-time streaming responses (like ChatGPT's typing effect), conversation history, and a polished UI. This is your SECRET WEAPON — it combines your Flutter expertise with your new AI skills, making you uniquely valuable.",
    requirements: [
      "Build a FastAPI backend that wraps an LLM (OpenAI or local) with streaming support via Server-Sent Events (SSE)",
      "Create a Flutter app with a ChatGPT-style UI: message bubbles, typing indicator, smooth scrolling, dark/light mode",
      "Implement real-time token-by-token streaming in Flutter using SSE or WebSocket connections",
      "Add conversation management: create new chats, view history, delete conversations (persist with SQLite or Firebase)",
      "Implement a system prompt selector — let users choose between different AI personas or modes",
      "Add image input support: take a photo or select from gallery and send to a multimodal model for analysis",
      "Build offline caching: previously loaded conversations should work without internet",
      "Add proper error handling: network errors, API rate limits, token limits, with user-friendly error messages",
      "Include loading states, shimmer effects, and smooth animations — make it feel premium",
      "Implement basic analytics: track messages sent, average response time, most used features",
      "Deploy the backend to Railway/Render and distribute the app via Firebase App Distribution or TestFlight",
      "Record a 60-second demo video showing the app in action for your portfolio"
    ],
    interviewStory:
      "This is your differentiator. Say: 'As a Flutter developer transitioning to AI, I wanted to prove I can bridge both worlds. I built a full-stack AI mobile app — a FastAPI backend serving LLM responses via Server-Sent Events, and a Flutter frontend with real-time streaming. The app shows tokens appearing one by one, just like ChatGPT. I handled the complexity of SSE in Dart, managed conversation state with [state management], and added features like image analysis with multimodal models. Most AI engineers can't build mobile apps, and most mobile devs don't understand AI backends — I do both.'"
  },
  {
    num: "05",
    title: "Open Source Contribution",
    when: "Complete by Month 4 (Day 105-120)",
    color: "#EF4444",
    tag: "Git, GitHub, LangChain, HuggingFace, Open Source, Code Review",
    description:
      "A meaningful contribution to a major AI/ML open source project — LangChain, HuggingFace Transformers, or similar. This could be a bug fix, documentation improvement, new feature, or adding test coverage. Having a merged PR on a major project is MASSIVE for credibility and proves you can work in real engineering teams.",
    requirements: [
      "Choose a project: LangChain (most approachable), HuggingFace Transformers, or scikit-learn",
      "Start by reading the CONTRIBUTING.md guide and setting up the development environment locally",
      "Browse 'good first issue' and 'help wanted' labels — pick an issue that matches your skill level",
      "Before coding, comment on the issue explaining your planned approach and ask for maintainer feedback",
      "Write clean, well-documented code that follows the project's style guide and conventions",
      "Add or update unit tests for your changes — most projects require test coverage for new code",
      "Write a clear PR description: what you changed, why, how to test it, and link to the issue",
      "Respond to code review feedback promptly and professionally — this is a skill interviewers care about",
      "If your first PR is documentation or a small fix, that's perfectly fine — follow up with a larger contribution",
      "Screenshot or save the merged PR notification — add it to your LinkedIn and resume"
    ],
    interviewStory:
      "Open source contributions speak louder than personal projects. Say: 'I contributed to [project name] — I [describe contribution: fixed a bug in the document loader / added support for a new vector store / improved test coverage]. The process taught me a lot about professional software engineering: I had to read a large unfamiliar codebase, follow strict coding conventions, write thorough tests, and respond to code review feedback from senior maintainers. My PR was reviewed by [maintainer name if notable] and merged into the main branch. I learned more about production code quality from that one PR than from months of solo projects.'"
  }
];

// ─── 3. WEEKLY CHECKPOINTS ───
// Self-test questions for all 17 weeks. Each checkpoint has 5-7 concrete, testable questions.
const weeklyCheckpoints = [
  {
    week: 1,
    title: "Week 1 Checkpoint — Python Foundations",
    questions: [
      "Can you write a Python function with type hints, default arguments, and *args/**kwargs?",
      "Can you explain and use list comprehensions, dict comprehensions, and generator expressions?",
      "Can you handle file I/O: read a CSV file line by line, write JSON output, and use context managers (with statement)?",
      "Can you use Python's built-in data structures (list, dict, set, tuple) and explain when to use each?",
      "Can you write a class with __init__, __repr__, __str__, and at least one custom method?",
      "Can you use virtual environments (venv or conda) and install packages with pip? Can you explain why virtual environments matter?",
      "Can you debug a Python script using print statements and read a traceback to identify the error line and type?"
    ]
  },
  {
    week: 2,
    title: "Week 2 Checkpoint — NumPy & Pandas Foundations",
    questions: [
      "Can you create NumPy arrays, perform element-wise operations, and explain broadcasting rules?",
      "Can you use NumPy for linear algebra: dot products, matrix multiplication, transpose, and reshaping?",
      "Can you load a CSV into a Pandas DataFrame, inspect it with .head(), .info(), .describe(), and .shape?",
      "Can you filter DataFrame rows with boolean indexing and .query(), and select columns by name or position?",
      "Can you handle missing data: detect NaN values with .isna(), drop them with .dropna(), and fill them with .fillna()?",
      "Can you perform groupby aggregations (mean, sum, count) and create pivot tables?",
      "Can you merge/join two DataFrames on a common column and explain the difference between inner, left, right, and outer joins?"
    ]
  },
  {
    week: 3,
    title: "Week 3 Checkpoint — Data Visualization & EDA",
    questions: [
      "Can you create a matplotlib figure with multiple subplots, custom titles, axis labels, and a legend?",
      "Can you build at least 5 chart types: line plot, bar chart, scatter plot, histogram, and heatmap using Seaborn?",
      "Can you create a correlation heatmap and identify the top 3 most correlated features in a dataset?",
      "Can you detect and handle outliers using the IQR method or Z-scores and explain your reasoning?",
      "Can you perform a complete EDA on a new dataset in under 30 minutes, producing at least 6 visualizations?",
      "Can you engineer at least 2 new features from existing columns (e.g., extracting day-of-week from a date, creating ratios)?"
    ]
  },
  {
    week: 4,
    title: "Week 4 Checkpoint — Statistics & Probability for ML",
    questions: [
      "Can you explain the difference between mean, median, and mode, and when each is the best measure of central tendency?",
      "Can you explain standard deviation vs. variance and compute them with NumPy?",
      "Can you describe a normal distribution and explain the 68-95-99.7 rule?",
      "Can you explain what a p-value is in plain English and when a result is 'statistically significant'?",
      "Can you explain Bayes' theorem with a concrete example (e.g., spam email classification)?",
      "Can you explain correlation vs. causation and give an example of a spurious correlation?"
    ]
  },
  {
    week: 5,
    title: "Week 5 Checkpoint — ML Fundamentals & Linear Models",
    questions: [
      "Can you explain the difference between supervised and unsupervised learning and give 3 examples of each?",
      "Can you explain the bias-variance tradeoff in your own words with a diagram?",
      "Can you implement linear regression from scratch in NumPy using the normal equation or gradient descent?",
      "Can you train a scikit-learn LogisticRegression model, make predictions, and evaluate with accuracy, precision, recall, and F1?",
      "Can you explain why you need train/test splits and implement K-Fold cross-validation with scikit-learn?",
      "Can you explain what regularization is and the difference between L1 (Lasso) and L2 (Ridge) regularization?",
      "Can you build a complete sklearn Pipeline with preprocessing steps (StandardScaler, OneHotEncoder) and a model?"
    ]
  },
  {
    week: 6,
    title: "Week 6 Checkpoint — Tree Models & Ensembles",
    questions: [
      "Can you explain how a decision tree makes splits (information gain / Gini impurity) and why trees overfit easily?",
      "Can you train a Random Forest and explain why ensembles of trees outperform single trees?",
      "Can you train an XGBoost model and tune its key hyperparameters (learning_rate, max_depth, n_estimators)?",
      "Can you explain the difference between bagging (Random Forest) and boosting (XGBoost/LightGBM)?",
      "Can you interpret feature importances from a tree model and explain which features matter most?",
      "Can you use GridSearchCV or RandomizedSearchCV to find optimal hyperparameters for any model?"
    ]
  },
  {
    week: 7,
    title: "Week 7 Checkpoint — Advanced ML & Evaluation",
    questions: [
      "Can you explain the full confusion matrix (TP, TN, FP, FN) and compute precision, recall, and F1 from it?",
      "Can you explain when to use accuracy vs. F1 vs. AUC-ROC and why accuracy fails on imbalanced datasets?",
      "Can you plot an ROC curve and a precision-recall curve and interpret them?",
      "Can you implement K-Means clustering and determine the optimal number of clusters using the elbow method?",
      "Can you apply PCA for dimensionality reduction and explain how many components to keep?",
      "Can you handle imbalanced datasets using at least 2 techniques (SMOTE, class weights, undersampling)?"
    ]
  },
  {
    week: 8,
    title: "Week 8 Checkpoint — Neural Networks & PyTorch Basics",
    questions: [
      "Can you explain how a single neuron works (weighted sum → activation function → output) and draw the diagram?",
      "Can you explain backpropagation in plain English: forward pass computes loss, backward pass computes gradients, optimizer updates weights?",
      "Can you build a simple feedforward neural network in PyTorch with nn.Module, forward(), and a training loop?",
      "Can you explain what a loss function is and name 3 common ones (MSE, Cross-Entropy, Binary Cross-Entropy)?",
      "Can you implement a training loop in PyTorch: forward pass → loss → backward → optimizer.step() → zero_grad?",
      "Can you use PyTorch DataLoader to batch your data and explain why batching matters for training?",
      "Can you explain what learning rate is and what happens if it's too high vs. too low?"
    ]
  },
  {
    week: 9,
    title: "Week 9 Checkpoint — CNNs & Deep Learning Patterns",
    questions: [
      "Can you explain what a convolutional layer does — filters sliding over an image to detect features — and draw it?",
      "Can you build a CNN in PyTorch with Conv2d, MaxPool2d, ReLU, and fully connected layers?",
      "Can you explain transfer learning: what it is, why it works, and when to use it?",
      "Can you fine-tune a pre-trained model (ResNet or EfficientNet) on a custom image dataset using PyTorch?",
      "Can you explain batch normalization, dropout, and why they help prevent overfitting?",
      "Can you explain the difference between training mode and evaluation mode in PyTorch (model.train() vs model.eval())?"
    ]
  },
  {
    week: 10,
    title: "Week 10 Checkpoint — NLP Foundations & Embeddings",
    questions: [
      "Can you explain tokenization and the difference between word-level, subword (BPE), and character-level tokenization?",
      "Can you explain what word embeddings are (Word2Vec, GloVe) and why they're better than one-hot encoding?",
      "Can you use HuggingFace's tokenizer to tokenize text and convert it to input IDs and attention masks?",
      "Can you explain the difference between RNNs, LSTMs, and Transformers, and why Transformers won?",
      "Can you explain the attention mechanism in plain English: 'which words should I pay attention to when processing this word?'",
      "Can you compute cosine similarity between two embedding vectors and explain what the score means?"
    ]
  },
  {
    week: 11,
    title: "Week 11 Checkpoint — Transformers & LLM Architecture",
    questions: [
      "Can you explain the Transformer architecture: encoder, decoder, multi-head self-attention, and feed-forward layers?",
      "Can you explain the self-attention formula (Q, K, V) and what 'scaled dot-product attention' computes?",
      "Can you explain the difference between encoder-only (BERT), decoder-only (GPT), and encoder-decoder (T5) architectures?",
      "Can you use HuggingFace Transformers to load a pre-trained model and run inference for text classification or generation?",
      "Can you explain what fine-tuning is vs. prompt engineering vs. RAG, and when to use each?",
      "Can you explain RLHF (Reinforcement Learning from Human Feedback) at a high level and why ChatGPT uses it?"
    ]
  },
  {
    week: 12,
    title: "Week 12 Checkpoint — LLM APIs & Prompt Engineering",
    questions: [
      "Can you call the OpenAI API (or any LLM API) with system/user messages, temperature, and max_tokens?",
      "Can you implement structured output: get an LLM to return valid JSON using prompt engineering or function calling?",
      "Can you explain and implement at least 3 prompt engineering techniques: few-shot, chain-of-thought, and role-based prompting?",
      "Can you implement streaming responses from an LLM API and process tokens as they arrive?",
      "Can you explain token limits, context windows, and how to estimate costs for LLM API calls?",
      "Can you build a simple chatbot with conversation memory (maintaining message history across turns)?"
    ]
  },
  {
    week: 13,
    title: "Week 13 Checkpoint — RAG Systems & Vector Databases",
    questions: [
      "Can you explain the complete RAG architecture: document ingestion → chunking → embedding → retrieval → generation?",
      "Can you implement document chunking with at least 2 strategies and explain the tradeoffs of chunk size?",
      "Can you create embeddings using OpenAI's API or a HuggingFace model and store them in ChromaDB?",
      "Can you implement semantic search: embed a query, find the top-K most similar chunks, and return them with scores?",
      "Can you explain the difference between semantic search and keyword search, and why hybrid search is better?",
      "Can you build a complete RAG pipeline using LangChain that answers questions from a set of documents with citations?",
      "Can you evaluate RAG quality: are the retrieved chunks relevant? Are the generated answers accurate and grounded?"
    ]
  },
  {
    week: 14,
    title: "Week 14 Checkpoint — AI Agents & Chains",
    questions: [
      "Can you explain what an AI agent is: an LLM that can use tools, reason about which tool to use, and take actions?",
      "Can you build a LangChain agent that has access to tools (web search, calculator, Python REPL) and uses ReAct reasoning?",
      "Can you implement a multi-step chain in LangChain: input → process → LLM call → parse output → next step?",
      "Can you explain the ReAct (Reason + Act) pattern and how agents decide which tool to call?",
      "Can you implement output parsing to extract structured data from LLM responses?",
      "Can you handle agent errors gracefully: what if the tool fails, the LLM hallucinates a tool name, or the chain loops?"
    ]
  },
  {
    week: 15,
    title: "Week 15 Checkpoint — FastAPI & Model Deployment",
    questions: [
      "Can you build a FastAPI app with POST endpoints that accept JSON, validate with Pydantic models, and return structured responses?",
      "Can you serve an ML model behind an API: load the model on startup, accept input data, return predictions?",
      "Can you implement streaming responses in FastAPI using StreamingResponse and Server-Sent Events?",
      "Can you containerize your API with Docker: write a Dockerfile, build the image, and run the container?",
      "Can you deploy your FastAPI app to a cloud platform (Railway, Render, or AWS) and get a public URL?",
      "Can you implement basic API authentication (API keys or JWT tokens) and rate limiting?"
    ]
  },
  {
    week: 16,
    title: "Week 16 Checkpoint — Flutter AI Integration & Full Stack",
    questions: [
      "Can you connect your Flutter app to your FastAPI backend using HTTP requests and handle JSON responses?",
      "Can you implement real-time SSE (Server-Sent Events) streaming in Flutter/Dart to show token-by-token LLM responses?",
      "Can you manage conversation state in Flutter: create, store, load, and delete conversations?",
      "Can you implement error handling in Flutter for network failures, timeouts, and API errors with user-friendly messages?",
      "Can you add image capture (camera/gallery) in Flutter and send images to a multimodal AI endpoint?",
      "Can you implement offline caching in Flutter so previously loaded conversations work without internet?"
    ]
  },
  {
    week: 17,
    title: "Week 17 Checkpoint — Job Readiness & Final Review",
    questions: [
      "Can you explain your RAG chatbot project end-to-end in under 3 minutes, covering architecture, tech choices, and results?",
      "Can you whiteboard a system design for a real-time recommendation engine, covering data flow, model serving, and scaling?",
      "Can you answer the top 10 ML interview questions (bias-variance, overfitting, transformers, RAG, etc.) confidently?",
      "Can you do a live coding challenge: implement a function to preprocess text, compute TF-IDF, or build a simple classifier?",
      "Can you walk through your GitHub portfolio and explain every project's motivation, architecture, challenges, and results?",
      "Can you explain the difference between fine-tuning, RAG, and prompt engineering, and recommend which to use for a given business scenario?",
      "Is your resume updated, LinkedIn optimized with AI/ML keywords, and do you have at least 3 portfolio projects with live demos?"
    ]
  }
];

// ─── 4. COMMUNITY RESOURCES ───
// Communities, channels, newsletters, podcasts, and books organized by category.
const communityResources = [
  {
    category: "Discord Servers",
    icon: "💬",
    items: [
      {
        name: "Hugging Face",
        description:
          "The largest open-source AI community. Great for getting help with Transformers, datasets, model fine-tuning, and staying current with new model releases. Very active and beginner-friendly.",
        link: "https://hf.co/join/discord"
      },
      {
        name: "LangChain",
        description:
          "Official LangChain community. Essential for RAG questions, agent patterns, and LangChain-specific debugging. The maintainers are active and responsive to questions.",
        link: "https://discord.gg/langchain"
      },
      {
        name: "MLOps Community",
        description:
          "Focused on the production side of ML: deployment, monitoring, pipelines, and infrastructure. Great for learning how real companies ship ML systems, not just Jupyter notebooks.",
        link: "https://discord.gg/mlops-community"
      },
      {
        name: "fast.ai",
        description:
          "Jeremy Howard's community. Known for the 'top-down' practical approach to deep learning. Incredibly supportive — members actively help beginners and celebrate wins.",
        link: "https://discord.gg/fastai"
      },
      {
        name: "Weights & Biases",
        description:
          "Community around experiment tracking and MLOps. Great for learning ML best practices, and W&B offers free credits for students and job seekers.",
        link: "https://discord.gg/wandb"
      }
    ]
  },
  {
    category: "YouTube Channels",
    icon: "🎬",
    items: [
      {
        name: "Andrej Karpathy",
        description:
          "Former Tesla AI Director and OpenAI founding member. His 'Neural Networks: Zero to Hero' series is the single best resource for understanding deep learning from scratch. Watch every video.",
        link: "https://www.youtube.com/@AndrejKarpathy"
      },
      {
        name: "3Blue1Brown",
        description:
          "Stunning visual explanations of math and ML concepts. His series on neural networks and linear algebra will give you deep intuition that textbooks can't. Watch the 'Essence of Linear Algebra' series.",
        link: "https://www.youtube.com/@3blue1brown"
      },
      {
        name: "StatQuest with Josh Starmer",
        description:
          "Makes statistics and ML algorithms crystal clear with simple drawings and catchy jingles. Perfect for understanding algorithms like Random Forests, XGBoost, PCA, and more. The 'BAM!' guy.",
        link: "https://www.youtube.com/@statquest"
      },
      {
        name: "Sentdex",
        description:
          "Practical Python and ML tutorials with real-world projects. Great for hands-on learning — he builds real applications, not toy examples. His PyTorch and NLP series are excellent.",
        link: "https://www.youtube.com/@sentdex"
      },
      {
        name: "Fireship",
        description:
          "Fast-paced, entertaining overviews of tech concepts in 100 seconds or 10 minutes. Perfect for quickly understanding new AI tools, frameworks, and trends without committing hours.",
        link: "https://www.youtube.com/@Fireship"
      },
      {
        name: "Two Minute Papers",
        description:
          "Covers the latest AI research papers in an exciting, accessible way. Watch this to stay current with bleeding-edge AI advances and sound knowledgeable in interviews.",
        link: "https://www.youtube.com/@TwoMinutePapers"
      },
      {
        name: "Yannic Kilcher",
        description:
          "Deep dives into AI research papers. More advanced, but once you're in month 2-3, his explanations of Transformer papers, RLHF, and RAG research are invaluable for interview depth.",
        link: "https://www.youtube.com/@YannicKilcher"
      },
      {
        name: "Corey Schafer",
        description:
          "The best Python fundamentals tutorials on YouTube. If you need to solidify your Python knowledge (OOP, decorators, generators, virtual environments), Corey's your guy.",
        link: "https://www.youtube.com/@coreyms"
      }
    ]
  },
  {
    category: "Newsletters",
    icon: "📧",
    items: [
      {
        name: "The Batch (DeepLearning.AI)",
        description:
          "Andrew Ng's weekly newsletter covering the most important AI news, research, and industry trends. Perfectly curated — not too long, always relevant. Essential reading every week.",
        link: "https://www.deeplearning.ai/the-batch/"
      },
      {
        name: "TLDR AI",
        description:
          "Daily 5-minute AI news summary. The fastest way to stay current with AI developments without spending hours reading. Covers research, industry, tools, and launches.",
        link: "https://tldr.tech/ai"
      },
      {
        name: "Import AI",
        description:
          "Jack Clark's (co-founder of Anthropic) deep and thoughtful newsletter on AI research and policy. Slightly more technical and thought-provoking. Great for developing informed opinions.",
        link: "https://importai.substack.com"
      },
      {
        name: "The Neuron",
        description:
          "Daily AI newsletter with a fun, accessible tone. Covers practical AI tools, new models, and industry news. Great for beginners because it explains things simply without dumbing them down.",
        link: "https://www.theneurondaily.com"
      },
      {
        name: "Ahead of AI (Sebastian Raschka)",
        description:
          "Sebastian Raschka's deep-dive newsletter on ML research and engineering. More technical, covering topics like LLM training, fine-tuning, and evaluation in depth. Perfect for month 2 onward.",
        link: "https://magazine.sebastianraschka.com"
      }
    ]
  },
  {
    category: "Podcasts",
    icon: "🎙️",
    items: [
      {
        name: "Latent Space",
        description:
          "The #1 AI engineering podcast. Interviews with the people building AI tools (LangChain founder, HuggingFace CTO, etc.). Incredibly relevant to what you're learning. Listen during commute or exercise.",
        link: "Search 'Latent Space' on Spotify/Apple Podcasts"
      },
      {
        name: "Practical AI",
        description:
          "Focuses on practical applications of AI, not just research. Great for understanding how companies actually use ML in production — which is exactly what interviewers want to hear you talk about.",
        link: "Search 'Practical AI' on Spotify/Apple Podcasts"
      },
      {
        name: "Machine Learning Street Talk",
        description:
          "Deep technical discussions about AI research with top researchers. More advanced, but incredible for developing deep understanding of topics like attention, scaling laws, and reasoning.",
        link: "Search 'Machine Learning Street Talk' on Spotify/Apple Podcasts"
      },
      {
        name: "Lex Fridman Podcast",
        description:
          "Long-form interviews with AI legends (Yann LeCun, Sam Altman, Ilya Sutskever, Andrej Karpathy). Not always ML-focused, but the AI episodes are goldmines of insight and inspiration.",
        link: "Search 'Lex Fridman' on Spotify/Apple Podcasts"
      }
    ]
  },
  {
    category: "Books (in Reading Order)",
    icon: "📚",
    items: [
      {
        name: "Python Crash Course — Eric Matthes",
        description:
          "Quick reference for Python fundamentals. You already know programming from Flutter/Dart, so skim this in a few days to get comfortable with Python syntax. Focus on the project chapters.",
        link: "Search on Amazon or use the free online resources at ehmatthes.github.io/pcc"
      },
      {
        name: "Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow — Aurélien Géron",
        description:
          "THE bible of practical ML. Covers everything from linear regression to deep learning with clear explanations and code. Read chapters 1-8 during months 1-2. Use it as a reference for the rest of your career.",
        link: "Search on Amazon or O'Reilly — often available free through library cards on O'Reilly Learning"
      },
      {
        name: "Deep Learning with Python — François Chollet",
        description:
          "Written by the creator of Keras. Builds deep intuition for neural networks without excessive math. Read during month 2 when you start deep learning. The explanations of CNNs and NLP are world-class.",
        link: "Search on Amazon or Manning Publications"
      },
      {
        name: "Build a Large Language Model (From Scratch) — Sebastian Raschka",
        description:
          "The newest and most relevant book for 2024-2025 AI engineering. Walks you through building a GPT-style model from scratch in PyTorch. Read during month 3 when you're learning LLMs. Gives you depth that impresses in interviews.",
        link: "Search on Amazon or Manning Publications"
      },
      {
        name: "Designing Machine Learning Systems — Chip Huyen",
        description:
          "Covers the production side of ML: system design, data pipelines, model serving, monitoring. Read in month 4 to prepare for system design interviews. This book is what separates ML engineers from notebook scientists.",
        link: "Search on Amazon or O'Reilly"
      }
    ]
  }
];

// ─── 5. INTERVIEW BANK ───
// Common interview questions organized by category with concise, memorable answers.
const interviewBank = [
  {
    category: "ML Fundamentals",
    emoji: "🧠",
    color: "#3B82F6",
    questions: [
      {
        q: "What is the bias-variance tradeoff?",
        a: "Bias is error from overly simple models that consistently miss the target (underfitting). Variance is error from overly complex models that change wildly with different training data (overfitting). The goal is finding the sweet spot: low bias + low variance. Fix high bias by adding features or using a more complex model. Fix high variance by adding more data, using regularization, or simplifying the model.",
        frequency: "Very Common"
      },
      {
        q: "How do you prevent overfitting?",
        a: "Use multiple techniques: 1) More training data (best fix), 2) Regularization (L1/L2 penalties), 3) Cross-validation to detect it early, 4) Dropout in neural networks, 5) Early stopping during training, 6) Simpler model architecture, 7) Feature selection to remove noise. Always monitor the gap between training and validation performance — if training accuracy is high but validation is low, you're overfitting.",
        frequency: "Very Common"
      },
      {
        q: "Explain the difference between L1 and L2 regularization.",
        a: "L1 (Lasso) adds the sum of absolute values of weights to the loss. It drives some weights to exactly zero, effectively performing feature selection — great when you suspect many features are irrelevant. L2 (Ridge) adds the sum of squared weights. It shrinks all weights toward zero but never exactly to zero — better when all features contribute somewhat. Use L1 for sparse solutions, L2 for general regularization, or ElasticNet for both.",
        frequency: "Common"
      },
      {
        q: "What is cross-validation and why is it important?",
        a: "Cross-validation splits your data into K folds, trains on K-1 folds and validates on the held-out fold, then rotates K times. It gives you a reliable estimate of model performance on unseen data and reduces the risk of getting lucky or unlucky with a single train/test split. Use Stratified K-Fold for classification to maintain class proportions in each fold. Typical K values are 5 or 10.",
        frequency: "Common"
      },
      {
        q: "When would you use precision vs. recall vs. F1 score?",
        a: "Precision matters when false positives are costly (spam filter — don't mark real email as spam). Recall matters when false negatives are costly (cancer detection — don't miss actual cancer). F1 is the harmonic mean of both, used when you need to balance precision and recall. For imbalanced datasets, never use accuracy — a model predicting 'no cancer' for every patient gets 99% accuracy but 0% recall. Use AUC-ROC for ranking quality.",
        frequency: "Very Common"
      },
      {
        q: "What is feature engineering and why does it matter?",
        a: "Feature engineering is creating new input features from raw data to help models learn better patterns. Examples: extracting day-of-week from timestamps, creating ratios between columns, binning continuous variables, encoding cyclical features (hours as sin/cos), and polynomial features. Good feature engineering often matters more than model choice — a simple model with great features can beat a complex model with raw features. It encodes domain knowledge that models can't discover alone.",
        frequency: "Common"
      }
    ]
  },
  {
    category: "Deep Learning",
    emoji: "🔥",
    color: "#EF4444",
    questions: [
      {
        q: "Explain backpropagation in simple terms.",
        a: "Backpropagation is how neural networks learn. Forward pass: input flows through the network, layer by layer, producing a prediction. We compute the loss (how wrong the prediction is). Backward pass: we compute the gradient of the loss with respect to every weight, using the chain rule of calculus, going from the output layer back to the input. Then the optimizer (like SGD or Adam) updates each weight in the direction that reduces the loss. Repeat thousands of times until the model converges.",
        frequency: "Very Common"
      },
      {
        q: "What is the vanishing gradient problem and how is it solved?",
        a: "In deep networks, gradients are multiplied layer by layer during backpropagation. If each multiplication is less than 1 (as with sigmoid activation), gradients shrink exponentially and early layers barely learn — this is vanishing gradients. Solutions: 1) ReLU activation (gradient is 1 for positive values), 2) Residual connections (skip connections in ResNet that add the input directly to the output), 3) Batch normalization to stabilize activations, 4) LSTM/GRU cells for recurrent networks. This is why modern networks use ReLU and ResNet architectures.",
        frequency: "Common"
      },
      {
        q: "Explain how convolutional neural networks (CNNs) work.",
        a: "CNNs use learnable filters (kernels) that slide across the input image, performing element-wise multiplication and summing to produce feature maps. Early layers detect simple patterns (edges, corners), deeper layers combine those into complex features (eyes, faces, objects). Key components: Conv layers (detect features), Pooling layers (downsample to reduce computation and add spatial invariance), and Fully Connected layers (final classification). CNNs exploit the fact that image patterns are local and translation-invariant — an edge is an edge regardless of where it appears.",
        frequency: "Common"
      },
      {
        q: "What is batch normalization and why does it help?",
        a: "Batch normalization normalizes the output of each layer to have zero mean and unit variance across the current mini-batch, then applies learnable scale and shift parameters. It helps because: 1) It stabilizes training by reducing internal covariate shift (each layer's input distribution stops changing wildly), 2) It allows higher learning rates (faster training), 3) It acts as a mild regularizer. Applied after the linear transformation and before (or after) the activation function. At inference time, it uses running averages computed during training, not batch statistics.",
        frequency: "Common"
      },
      {
        q: "What is the difference between SGD, Adam, and learning rate schedulers?",
        a: "SGD (Stochastic Gradient Descent) updates weights using a fixed learning rate — simple but can be slow and oscillate. Adam combines momentum (smooths gradient direction using exponential moving average) and RMSProp (adapts learning rate per parameter based on gradient magnitude), making it faster to converge and more robust to hyperparameter choices. Learning rate schedulers reduce the learning rate over time: start with a large step to move quickly, then shrink the step for fine-grained convergence. Common schedulers: StepLR (reduce every N epochs), CosineAnnealing, and ReduceLROnPlateau (reduce when validation loss stalls).",
        frequency: "Common"
      },
      {
        q: "What is dropout and how does it prevent overfitting?",
        a: "Dropout randomly sets a fraction of neuron outputs to zero during each training step (typically 20-50%). This prevents neurons from co-adapting — each neuron must learn to be useful independently because it can't rely on any specific other neuron being present. It acts like training an ensemble of smaller networks simultaneously. At inference time, dropout is turned off and weights are scaled accordingly. Key detail: always use model.train() for training (dropout active) and model.eval() for inference (dropout disabled) in PyTorch.",
        frequency: "Common"
      }
    ]
  },
  {
    category: "LLMs & NLP",
    emoji: "🤖",
    color: "#8B5CF6",
    questions: [
      {
        q: "How do Transformers work? Explain the architecture.",
        a: "Transformers process all tokens in parallel using self-attention instead of sequentially like RNNs. The core mechanism: each token creates Query, Key, and Value vectors. Attention scores = softmax(Q * K^T / sqrt(d_k)), then multiply by V. This lets each token 'attend to' every other token, capturing long-range dependencies. Multi-head attention does this in parallel with different learned projections. The full architecture has encoder (bidirectional, used for understanding — BERT) and decoder (autoregressive, used for generation — GPT) blocks, each with self-attention + feed-forward layers + residual connections + layer normalization.",
        frequency: "Very Common"
      },
      {
        q: "What is the difference between fine-tuning and RAG? When would you use each?",
        a: "Fine-tuning changes the model's weights by training on your specific data — it teaches the model new behaviors, tone, or specialized knowledge permanently. RAG retrieves relevant documents at query time and includes them in the prompt context — the model's weights stay unchanged. Use fine-tuning when: you need a specific output format/style, the knowledge is stable and doesn't change often, or you need to change model behavior. Use RAG when: your data changes frequently, you need citations/sources, the knowledge base is large, or you need to avoid hallucination on factual queries. RAG is cheaper and faster to implement; fine-tuning gives deeper behavioral changes.",
        frequency: "Very Common"
      },
      {
        q: "Explain tokenization and why it matters for LLMs.",
        a: "Tokenization converts text into numerical tokens that models can process. Modern LLMs use subword tokenization (BPE or SentencePiece) that splits text into frequent subword units — 'unhappiness' becomes ['un', 'happi', 'ness']. This balances vocabulary size with ability to handle rare words. It matters because: 1) Token count determines API costs and context window limits, 2) Tokenization affects model understanding (some languages are more 'token-expensive'), 3) Chunk boundaries in RAG should respect token limits, 4) Code and non-English text often tokenize into more tokens than expected. Typical LLM vocabulary: 30K-100K tokens.",
        frequency: "Common"
      },
      {
        q: "What is RLHF and why is it used?",
        a: "RLHF (Reinforcement Learning from Human Feedback) is the process that transforms a base language model into a helpful, harmless assistant like ChatGPT. Three steps: 1) Supervised fine-tuning on high-quality instruction-response pairs, 2) Train a reward model on human preference data (humans rank multiple model outputs), 3) Use PPO (Proximal Policy Optimization) to optimize the LLM to maximize the reward model's score. RLHF is why ChatGPT feels helpful and follows instructions, while base GPT-4 just predicts the next token. Alternatives like DPO (Direct Preference Optimization) skip the reward model step for efficiency.",
        frequency: "Common"
      },
      {
        q: "What are embeddings and how are they used in AI applications?",
        a: "Embeddings are dense vector representations of text (or images, audio) in a high-dimensional space where semantic meaning is captured by geometric proximity. Similar concepts have nearby vectors — 'king' is close to 'queen', 'Python' is close to 'programming'. They're created by models like OpenAI's text-embedding-ada-002 or sentence-transformers. Used in: 1) Semantic search (find similar documents), 2) RAG (embed and retrieve relevant chunks), 3) Clustering (group similar items), 4) Recommendation systems, 5) Anomaly detection. The key insight: embeddings turn unstructured text into structured numbers that algorithms can work with.",
        frequency: "Very Common"
      },
      {
        q: "What are the key prompt engineering techniques?",
        a: "1) Zero-shot: just ask directly — works for simple tasks. 2) Few-shot: provide 2-5 examples of input→output pairs before your actual query — dramatically improves format consistency. 3) Chain-of-Thought (CoT): add 'Let's think step by step' or show reasoning examples — improves accuracy on math/logic tasks by 20-40%. 4) Role prompting: 'You are an expert ML engineer...' — sets context and expertise level. 5) Output formatting: 'Respond in JSON with keys: summary, confidence, sources' — forces structured output. 6) Retrieval-augmented: inject relevant context before the question. Combine techniques for best results: role + few-shot + CoT + format instructions.",
        frequency: "Very Common"
      }
    ]
  },
  {
    category: "RAG & Agents",
    emoji: "🔗",
    color: "#10B981",
    questions: [
      {
        q: "Explain the RAG architecture end-to-end.",
        a: "Ingestion phase: Documents are loaded → split into chunks (typically 256-1024 tokens with overlap) → each chunk is converted to an embedding vector → vectors are stored in a vector database (ChromaDB, Pinecone, Weaviate) with metadata. Query phase: User question is embedded using the same embedding model → vector DB performs similarity search to find top-K most relevant chunks → retrieved chunks are inserted into a prompt template as context → LLM generates an answer grounded in the retrieved context. Key details: chunk size affects precision vs. recall, overlap prevents information loss at boundaries, and metadata filtering can narrow search scope.",
        frequency: "Very Common"
      },
      {
        q: "What chunking strategies exist and how do you choose?",
        a: "1) Fixed-size with overlap: Split every N tokens/characters with M-token overlap. Simple and predictable, good baseline. 2) Recursive character splitting: Split on paragraphs first, then sentences, then characters — respects natural document structure. Best general-purpose strategy. 3) Semantic chunking: Use embeddings to find natural topic boundaries. Better quality but slower. 4) Document-specific: Markdown headers, HTML tags, code functions — preserves structural meaning. Choose based on your data: fixed-size for homogeneous text, recursive for mixed documents, semantic for quality-critical applications. Typical starting point: 512 tokens with 50-token overlap, then experiment.",
        frequency: "Very Common"
      },
      {
        q: "What are vector databases and how do they work?",
        a: "Vector databases store high-dimensional embedding vectors and enable fast similarity search. They use approximate nearest neighbor (ANN) algorithms like HNSW (Hierarchical Navigable Small World graphs) or IVF (Inverted File Index) to find similar vectors without comparing every pair. Key features: similarity search (cosine, euclidean, dot product), metadata filtering (filter by source, date, category before vector search), CRUD operations on vectors, and scalability. Popular options: ChromaDB (simple, local, great for prototyping), Pinecone (managed, scalable), Weaviate (hybrid search built-in), Qdrant (high performance, Rust-based). For production RAG, hybrid search (vector + keyword) usually outperforms pure vector search.",
        frequency: "Common"
      },
      {
        q: "How do you evaluate RAG system quality?",
        a: "Evaluate both retrieval and generation separately. Retrieval metrics: 1) Hit rate — is the correct chunk in the top-K? 2) MRR (Mean Reciprocal Rank) — where does the correct chunk appear? 3) Precision@K — what fraction of retrieved chunks are relevant? Generation metrics: 1) Faithfulness — does the answer use only information from retrieved context (no hallucination)? 2) Relevance — does the answer address the question? 3) Completeness — does it include all key information? Tools: RAGAS framework automates this with LLM-as-judge. Create a golden test set of 50-100 question-answer-context triples. Run evaluation after every change to chunking, retrieval, or prompts.",
        frequency: "Common"
      },
      {
        q: "What is hybrid search and why is it better than pure vector search?",
        a: "Hybrid search combines semantic vector search (finds conceptually similar results) with keyword-based BM25 search (finds exact term matches). Pure vector search misses exact matches — if a user searches for 'error code E-4021', vector search might return conceptually similar errors but miss the exact code. Pure keyword search misses semantics — searching 'how to fix slow model' won't match 'optimization techniques for inference latency'. Hybrid combines both using Reciprocal Rank Fusion (RRF) or weighted scoring. Implementation: run both searches, normalize scores, combine with configurable weights (typically 0.7 semantic + 0.3 keyword). Most production RAG systems use hybrid search.",
        frequency: "Common"
      },
      {
        q: "What are AI agent patterns and how do they work?",
        a: "AI agents are LLMs that can reason, plan, and use tools to accomplish tasks. Key patterns: 1) ReAct (Reason + Act): LLM thinks step-by-step, decides which tool to call, observes the result, then thinks again. Most common pattern. 2) Plan-and-Execute: LLM creates a full plan first, then executes each step. Better for complex multi-step tasks. 3) Reflexion: Agent evaluates its own output and retries if unsatisfied. Improves quality. 4) Multi-agent: Multiple specialized agents collaborate — one for research, one for coding, one for review. Tools can be anything: web search, database queries, code execution, API calls, calculators. The challenge is reliability — agents can loop, hallucinate tool names, or misinterpret tool outputs. Always add guardrails and maximum iteration limits.",
        frequency: "Common"
      }
    ]
  },
  {
    category: "System Design",
    emoji: "🏗️",
    color: "#F59E0B",
    questions: [
      {
        q: "Design a recommendation system for an e-commerce platform.",
        a: "Data layer: Collect user behavior (views, clicks, purchases, ratings), item metadata (category, price, description), and user profiles. Storage: PostgreSQL for structured data, Redis for real-time features. Model layer: Two approaches in parallel — collaborative filtering (users who bought X also bought Y, using matrix factorization or neural CF) and content-based (embed item descriptions, find similar items). Combine with a ranking model (XGBoost or neural ranker) that takes candidate items + user features and predicts click probability. Serving layer: Pre-compute recommendations for popular users (batch), compute in real-time for active sessions. Use a feature store (Feast) for consistent features between training and serving. A/B test everything — track click-through rate, conversion rate, and revenue per user.",
        frequency: "Very Common"
      },
      {
        q: "Design a RAG chatbot that serves 10,000 concurrent users.",
        a: "Architecture: Load balancer (nginx) → API gateway (rate limiting, auth) → FastAPI application servers (horizontally scaled, stateless) → async job queue for document ingestion. Data flow: Documents ingested via background workers → chunked and embedded (use GPU-enabled embedding service or batched API calls) → stored in managed vector DB (Pinecone or Weaviate, not ChromaDB for production scale). Query flow: Request → embed query → vector search (P95 < 50ms with proper indexing) → construct prompt → LLM API call (cache repeated queries with Redis) → stream response via SSE. Key scaling decisions: Separate ingestion from serving, use connection pooling for DB, cache frequent queries and their embeddings, implement circuit breakers for LLM API failures. Monitoring: track latency per component, retrieval hit rates, LLM token usage, and user satisfaction signals.",
        frequency: "Very Common"
      },
      {
        q: "Design a real-time fraud detection system.",
        a: "Data pipeline: Transaction events stream via Kafka → feature engineering service computes real-time features (transaction velocity, geographic anomalies, device fingerprints, spending patterns) and joins with historical features from a feature store. Model layer: Two-stage approach — Stage 1: rule-based system catches obvious fraud (known bad IPs, impossible geography). Stage 2: ML model (XGBoost or neural network) scores each transaction (0-1 fraud probability) in < 100ms. Training: Use historical labeled fraud data, handle extreme class imbalance (0.1% fraud) with SMOTE and focal loss. Serving: Model served via low-latency endpoint (TensorRT or ONNX runtime). Decisions: Low-risk → approve, High-risk → block, Medium-risk → additional verification (2FA). Critical: Log all predictions for model retraining, monitor for concept drift (fraud patterns evolve), and have a human review queue for edge cases. False positive rate matters as much as detection rate.",
        frequency: "Common"
      },
      {
        q: "Design an ML pipeline for a company that retrains models weekly.",
        a: "Orchestration: Use Airflow or Prefect to schedule weekly pipeline runs. Pipeline stages: 1) Data extraction — pull new data from production DB and data warehouse. 2) Data validation — use Great Expectations to check for schema changes, missing values, distribution drift. 3) Feature engineering — compute features consistently using a feature store (Feast). 4) Model training — train on new data, track experiments with MLflow or W&B. 5) Evaluation — compare against current production model on a holdout set and a golden test set. 6) Promotion gate — only deploy if new model beats current model on key metrics (automated or human approval). 7) Deployment — canary deployment: serve 5% traffic to new model, monitor metrics, gradually increase. 8) Monitoring — track prediction distribution, latency, and business metrics. Alert if data or concept drift detected. Storage: model artifacts in S3 with versioning, metadata in MLflow model registry.",
        frequency: "Common"
      },
      {
        q: "Design a document search system for a legal firm with 10 million documents.",
        a: "Ingestion: Batch pipeline to OCR scanned PDFs (Tesseract or AWS Textract) → clean and normalize text → chunk documents (legal-aware chunking: split on sections, clauses, paragraphs) → generate embeddings (batch process with GPU-optimized embedding model) → store in vector DB with rich metadata (date, case type, jurisdiction, parties). Indexing: Dual index — vector index for semantic search + Elasticsearch for keyword/boolean search. Support hybrid search with configurable weights. Query: Parse user query → expand with legal synonyms → hybrid search → re-rank top-50 results with a cross-encoder model for precision → return top-10 with highlighted snippets and source citations. Scale: Shard vector index by date ranges, use read replicas, cache popular queries. Security: Row-level access control (attorneys only see their cases), audit logging, and data encryption at rest. Weekly re-index to incorporate new documents.",
        frequency: "Common"
      }
    ]
  },
  {
    category: "Python & Coding",
    emoji: "🐍",
    color: "#059669",
    questions: [
      {
        q: "What is the difference between a list and a tuple in Python? When would you use each?",
        a: "Lists are mutable (can add, remove, change elements), tuples are immutable (fixed after creation). Use lists for collections that change: training data batches, feature lists, model predictions. Use tuples for fixed data: function return values, dictionary keys (tuples are hashable, lists aren't), database records, and coordinates. Tuples use less memory and are slightly faster to access. In ML code, you'll use lists for data processing and tuples for returning multiple values from functions (e.g., train_test_split returns tuples).",
        frequency: "Common"
      },
      {
        q: "Explain list comprehensions and generator expressions. When should you use generators?",
        a: "List comprehension: [x**2 for x in range(1000)] creates the full list in memory immediately. Generator expression: (x**2 for x in range(1000)) produces values one at a time, on demand. Use generators when: 1) The dataset is too large to fit in memory, 2) You only need to iterate once, 3) You're processing streaming data. In ML: use generators for loading large datasets batch-by-batch (PyTorch DataLoader uses this pattern), streaming API responses, and processing large CSV files line-by-line. Use list comprehensions when you need random access or the data fits comfortably in memory.",
        frequency: "Common"
      },
      {
        q: "How would you handle a large CSV that doesn't fit in memory using Pandas?",
        a: "Multiple approaches: 1) Chunked reading: pd.read_csv('file.csv', chunksize=10000) returns an iterator — process each chunk and aggregate results. 2) Specify dtypes explicitly: pd.read_csv('file.csv', dtype={'col': 'float32'}) to reduce memory per column. 3) Use usecols to load only needed columns: pd.read_csv('file.csv', usecols=['col1', 'col2']). 4) Use category dtype for low-cardinality string columns — reduces memory 10x+. 5) Switch to Polars or Dask for truly large data — both support lazy evaluation and out-of-core processing. In practice, combining chunksize + usecols + dtypes handles most cases up to several GB.",
        frequency: "Common"
      },
      {
        q: "Write a function to compute cosine similarity between two vectors without using a library.",
        a: "def cosine_similarity(a, b): dot_product = sum(x * y for x, y in zip(a, b)); magnitude_a = sum(x**2 for x in a) ** 0.5; magnitude_b = sum(x**2 for x in b) ** 0.5; if magnitude_a == 0 or magnitude_b == 0: return 0.0; return dot_product / (magnitude_a * magnitude_b). This returns a value between -1 and 1, where 1 means identical direction, 0 means orthogonal (unrelated), and -1 means opposite. In production, use numpy: np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b)) for vectorized performance. Cosine similarity is THE metric for comparing embeddings in RAG, semantic search, and recommendation systems.",
        frequency: "Common"
      },
      {
        q: "What are decorators in Python and how are they used in ML/API code?",
        a: "Decorators wrap a function with additional behavior without modifying its code. Syntax: @decorator above the function definition. Common uses: @app.get('/predict') in FastAPI (registers a route), @torch.no_grad() (disables gradient computation during inference for memory savings), @lru_cache (memoizes expensive function calls), @retry(max_attempts=3) (retries on failure), and custom timing decorators to benchmark model inference. Under the hood: decorated_func = decorator(original_func). You can write custom decorators for logging, authentication, input validation, and performance monitoring. They're essential for writing clean, DRY production code.",
        frequency: "Common"
      },
      {
        q: "Explain async/await in Python and when it's used in AI applications.",
        a: "async/await enables concurrent I/O operations without threads. An async function returns a coroutine that pauses at await points, letting other coroutines run during I/O waits. Critical for AI applications because: 1) LLM API calls take 1-30 seconds — async lets you process multiple requests concurrently instead of sequentially. 2) FastAPI is async-native — your endpoints can handle thousands of concurrent users. 3) Batch embedding calls: await asyncio.gather(*[embed(chunk) for chunk in chunks]) processes all chunks concurrently. 4) Streaming responses require async iteration: async for token in stream. Key: async only helps with I/O-bound work (API calls, DB queries, file reads), not CPU-bound work (model training, data processing) — use multiprocessing for CPU-bound tasks.",
        frequency: "Common"
      }
    ]
  }
];

// ─── EXPORTS ───
// Export all supplementary data constants for use in the curriculum UI.
export { studyGuide, portfolioPieces, weeklyCheckpoints, communityResources, interviewBank };
