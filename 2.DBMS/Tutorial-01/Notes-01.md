# DBMS

## Database System

1. Database
Collection of Related Data

   * Structured Database
   * Unstructured Databse

2. DBMS --> Database Management System

* SQL Server, Oracle, MySQL,DB2(IBM)

## Structured Data

Data is stored in the form Relation

## Unstrutured Data

Unstructured data refers to data that doesn't conform to a specific, pre-defined data model or format. Unlike structured data, which is organized into rows and columns like a spreadsheet, unstructured data lacks a fixed structure, making it more challenging to analyze and process using traditional methods.  

Examples of unstructured data include:

* Text: Documents, emails, social media posts, and articles.
* Multimedia: Images, videos, and audio recordings.
* Natural Language: Speech transcripts, chat logs, and text from customer reviews.
* Sensor Data: Data from IoT devices, such as temperature readings or sensor logs.
* Web Data: Web pages, web scraping data, and web logs.

Analyzing unstructured data often requires techniques such as natural language processing (NLP) for text, computer vision for images and videos, and machine learning algorithms to extract meaningful insights. This type of data can be valuable for businesses to gain insights, improve decision-making, and understand customer sentiments, but it often requires advanced data processing and analysis methods due to its lack of structure.

## File System vs DBMS

### File System

* Organization: File systems organize data in a hierarchical structure, with files and directories.
* Data Structure: It stores data in an unstructured or semi-structured manner. Files can contain any type of data, and the format is determined by the user or application.
* Access: Access control is typically limited and depends on the file permissions set by the operating system.
* Concurrency: File systems may not handle concurrent access well, leading to issues like file locks or data corruption in multi-user scenarios.
* Querying: File systems lack built-in querying capabilities, making it challenging to search for specific data efficiently.
* Scalability: Scaling can be complex, as it often involves manually managing file storage and naming conventions.
* Data Integrity: There's a higher risk of data inconsistency and corruption in file systems, as data is often accessed and modified without strong validation.
* Use Cases: File systems are suitable for managing basic data storage needs, like personal files, simple document storage, or local application data.

### Database Management System (DBMS)

* Organization: DBMS organizes data in structured tables with defined schemas, making it easy to represent complex relationships.
* Data Structure: Data in a DBMS is highly structured, with predefined data types and relationships between tables.
* Access: DBMS provides fine-grained access control and authentication mechanisms to protect data.
* Concurrency: It's designed to handle concurrent access, ensuring data consistency and integrity in multi-user environments.
* Querying: DBMS offers powerful querying capabilities using SQL or other query languages, enabling efficient data retrieval and manipulation.
* Scalability: Most modern DBMS systems support horizontal and vertical scalability, making it easier to adapt to changing data needs.
* Data Integrity: DBMS enforces data integrity rules, such as constraints and transactions, to maintain data accuracy and consistency.
* Use Cases: DBMS is ideal for applications that require structured, organized, and scalable data storage, such as e-commerce websites, CRM systems, financial applications, and more.

In summary, while file systems are suitable for basic data storage and simple file management, DBMS is the preferred choice for applications that demand structured, secure, and efficient data management, especially when data relationships, concurrency, and querying capabilities are crucial. Each has its own strengths and weaknesses, and the choice between them depends on the specific requirements of your project.

## DBMS Architecture

In database management systems (DBMS), 2-tier and 3-tier architectures are two common architectural models for organizing and managing the components of a database application. Here's an overview of each:

### 2-Tier Architecture

1. Client Tier: In a 2-tier architecture, there are two main tiers. The client tier, which is typically a user interface or client application, interacts directly with the database. The client application handles both the presentation (UI) and the application logic.

2. Database Tier: The database tier consists of the database server where the actual database management system (e.g., MySQL, Oracle, SQL Server) resides. It stores and manages the data and responds to the queries and requests sent by the client application.

Advantages of 2-Tier Architecture:

* Simplicity: It is straightforward and easier to design and implement.
* Performance: Since there are fewer layers, it can offer better performance for certain types of applications.
* Cost-Effective: It may require fewer hardware and software resources.

Disadvantages of 2-Tier Architecture:

* Lack of Scalability: Scaling can be challenging because both the presentation and application logic are tightly coupled in the client tier.
* Limited Security: Security measures are often focused on the client side, making it potentially less secure.
* Maintenance Challenges: Changes or updates to the application can be more complex due to tight coupling between the client and database.

### 3-Tier Architecture

1. Presentation Tier: This is the top tier, also known as the client tier. It includes the user interface (UI) and handles user interactions. However, unlike the 2-tier architecture, the presentation tier in a 3-tier architecture is primarily responsible for displaying data and capturing user input.

2. Application Tier (Logic Tier): The middle tier is the application tier. It contains the application logic and business rules. It processes user requests, communicates with the presentation tier, and interacts with the database tier.

3. Data Tier (Database Tier): The bottom tier is the data tier or database tier. It includes the database server where the data is stored and managed. The database tier is responsible for handling data-related operations, such as querying, inserting, updating, and deleting data.

Advantages of 3-Tier Architecture:

* Scalability: It allows for more flexible scaling since each tier can be scaled independently.
* Improved Security: Security can be better enforced by isolating the application logic from the presentation tier.
* Maintainability: It is easier to maintain and update because of the separation of concerns.

Disadvantages of 3-Tier Architecture:

* Complexity: It is more complex to design and implement compared to the 2-tier model.
* Performance Overhead: The additional layer (application tier) can introduce some performance overhead compared to a 2-tier architecture.

In summary, the choice between 2-tier and 3-tier architectures in DBMS depends on factors like scalability requirements, security concerns, and the complexity of the application. While 2-tier architectures may be suitable for simple applications, 3-tier architectures offer more flexibility, security, and scalability for complex, enterprise-level applications.

## Schema in Database

A schema in a database refers to the logical design or blueprint that defines the structure, organization, and relationships of the data stored in that database. It serves as a framework for how data is organized into tables, columns, indexes, constraints, and other database objects. Here are key points to understand about database schemas:

1. Structural Definition: A schema defines the structure of the database, including the tables, their columns, data types, constraints, and relationships between tables. It specifies what data can be stored and how it should be organized.

2. Organization: Within a database, multiple schemas can exist, and each schema can contain one or more tables and other database objects. Schemas help in organizing and categorizing data within a database, which is particularly useful in complex database systems.

3. Access Control: Schemas are often used to manage access control and permissions. Database users or roles can be granted or denied access to specific schemas or objects within those schemas, providing a level of security and data isolation.

4. Namespace: Schemas also serve as namespaces for database objects. This means that objects within different schemas can have the same name without conflict because they are differentiated by their schema name.

5. Database Portability: Schemas aid in making a database more portable across different database management systems (DBMS). While the specific SQL syntax for creating schemas may vary between DBMSs, the concept of organizing data using schemas is widely supported.

6. Modularity and Maintenance: Schemas facilitate modularity in database design, making it easier to understand, maintain, and update the database structure. Changes to one schema do not necessarily affect other schemas, allowing for more agile database development.

* Examples: In a database for an e-commerce platform, you might have schemas for "Customers," "Products," and "Orders." Each schema would contain tables related to its respective domain, such as "Customer_Info" in the "Customers" schema, "Product_Catalog" in the "Products" schema, and "Order_Details" in the "Orders" schema.

In summary, a schema in a database is a fundamental concept that defines the structure and organization of data. It helps in maintaining data integrity, access control, and modularity within the database system, making it a crucial element in database design and management.

## Three Schema Architecture

The Three Schema Architecture, also known as the ANSI/SPARC Architecture, is a conceptual framework that defines the different levels of abstraction in a database management system (DBMS). It was developed by the American National Standards Institute (ANSI) Standards Planning and Requirements Committee (SPARC) in the 1970s. The Three Schema Architecture divides the database system into three main components or schemas:  

### External Schema (View Level)

* The external schema represents the highest level of abstraction in the architecture.
* It defines the way data is viewed and accessed by end-users, applications, or different user groups.
* Each external schema corresponds to a specific user's or application's perspective of the data.
* It hides the underlying details of the logical and physical schema, providing a tailored and simplified view of the data.
* Changes to the external schema should not affect the overall database design.

### Logical Schema (Logical Level)

The logical schema represents the logical organization of data within the database.
It defines the structure of the data, including tables, relationships, constraints, and integrity rules.

* The logical schema is independent of any specific physical storage considerations or implementation details.
* It provides a high-level, abstract representation of the database's structure, ensuring data consistency and integrity.
* Changes to the logical schema affect how data is organized and related within the database.

### Physical Schema (Physical Level)

The physical schema represents the lowest level of abstraction in the architecture.
It defines how data is physically stored on the underlying hardware and storage devices.
This schema includes details such as file structures, indexing methods, storage allocation, and access paths.

* It is responsible for optimizing data storage and retrieval for efficiency and performance.
* Changes to the physical schema are closely tied to the hardware and storage technology and may affect the system's performance.

### Here's a simplified analogy to understand these three schemas

* External Schema (View Level): Think of this as the user interface of an application. Different users or roles see and interact with the data in different ways, but they don't need to know how the data is structured or stored.

* Logical Schema (Logical Level): This is like the database schema designed by a database designer or architect. It defines the tables, relationships, and constraints without specifying how data is stored on disk.

* Physical Schema (Physical Level): This is similar to the actual storage layout and hardware configuration. It determines where and how data is stored on the hard drives, including details like indexing methods and storage optimization.

The Three Schema Architecture helps in achieving data independence, meaning that changes at one level (e.g., physical schema) should not impact the other levels (e.g., logical schema or external schemas). It promotes flexibility, security, and maintainability in database design and management.
