# Notes - 02

Data independence in a database management system (DBMS) refers to the ability to make changes to the database schema, organization, or structure without affecting the applications, programs, or users that interact with the database. It is a fundamental concept that aims to decouple the physical storage details of data from the logical and external views of that data. There are two types of data independence:

1. Logical Data Independence

   * Logical data independence deals with the independence between the logical schema and the external schemas.
   * It allows changes to the logical schema (the way data is organized and related within the database) without impacting the external schemas or the applications that use them.
   * For example, you can add new tables, modify existing tables, or change relationships between tables in the logical schema without requiring changes to the applications or queries that access the data through external schemas.

2. Physical Data Independence:

* Physical data independence deals with the independence between the physical schema (how data is stored on storage devices) and both the logical and external schemas.
* It allows changes to the physical schema, such as reorganizing data storage, optimizing indexing, or migrating to a different storage technology, without affecting the logical schema or external schemas.
* Applications and users should continue to interact with the data through the same logical schema and external schemas regardless of physical changes.

The key benefits of data independence in DBMS are:

* Flexibility: It allows for easier modifications to the database structure to accommodate changing business requirements or performance optimizations without causing disruptions to applications.

* Application Development: Developers can focus on writing and maintaining application code without being concerned about changes in the database structure.

* Data Security: Logical data independence can be used to control access to sensitive data, ensuring that data security remains intact even if the physical storage mechanisms change.

* Database Performance: Physical data independence enables administrators to make improvements to database performance without altering the logical schema, thus minimizing the impact on applications.

* Long-term Maintenance: It simplifies long-term maintenance, upgrades, and migrations of database systems, as changes can be made to the underlying structure without affecting the functionality exposed to users.

Achieving data independence is a crucial design goal in DBMS development because it helps ensure that databases can evolve over time to meet changing needs while maintaining data integrity, security, and application compatibility. It is one of the fundamental principles that contribute to the effectiveness and reliability of modern database systems.

## Primary Key and Candidate Key

### Candidate Key

A candidate key is a set of one or more columns (attributes) in a relational table that can uniquely identify each row or record in that table. It means that no two rows can have the same combination of values in the candidate key columns. A table can have multiple candidate keys, but only one of them will be chosen as the primary key.  

Key points about candidate keys:

* Each candidate key uniquely identifies rows in a table.
* Candidate keys can consist of one or more columns.
* Candidate keys can be composite (multiple columns) or simple (single column).
* It's possible for a table to have multiple candidate keys, but one of them will be selected as the primary key.
* The choice of the primary key is often based on factors such as simplicity, stability, and performance.

### Primary Key

A primary key is a specific candidate key chosen by the database designer to be the main key for a table. It serves as a unique identifier for each row in the table and is used to enforce data integrity and establish relationships between tables in a relational database. The primary key must satisfy the following conditions:

* Uniqueness: Values in the primary key column(s) must be unique across all rows in the table.
Non-null: The primary key column(s) cannot contain null values, ensuring that each row has a valid identifier.
* Permanence: The values in the primary key should not change over time or be updated frequently.
Key points about primary keys:

* A table can have only one primary key.
* The primary key can be composed of one or more columns, forming a composite primary key.
* The primary key is crucial for maintaining data integrity and creating relationships between tables through foreign keys.
* It is often used as a reference in other tables to establish relationships (foreign keys).
Primary keys are typically indexed for faster data retrieval and to enforce uniqueness efficiently.

Example:

Consider a "Students" table. It might have several candidate keys, such as "Student_ID," "Email," and "Social_Security_Number." However, the database designer may choose "Student_ID" as the primary key because it is a stable, unique identifier for each student. This primary key ensures that each student is uniquely identifiable within the table.  

In summary, candidate keys are sets of columns that can uniquely identify rows in a table, while the primary key is the chosen candidate key that serves as the main unique identifier for the table and is used to maintain data integrity and establish relationships between tables in a relational database.

## Foreign Key

A foreign key is a database constraint that establishes a link between two tables. It enforces referential integrity, ensuring that the data in one table (the child table) corresponds to the data in another table (the parent table). Here are the key points to understand about foreign keys in DBMS:

### Purpose of a Foreign Key

* The primary purpose of a foreign key is to establish and maintain relationships between tables in a relational database.
* It enforces referential integrity, which means that data in the child table (the table with the foreign key) corresponds to data in the parent table (the table with the primary key).

### Components of a Foreign Key

* A foreign key is a column or a set of columns in the child table that references the primary key or a unique key in the parent table.

* The foreign key column(s) in the child table contains values that match values in the primary key column(s) of the parent table.

### Referential Actions

* Foreign keys often come with referential actions that specify what should happen when a related record in the parent table is modified or deleted. Common referential actions include:
  * CASCADE: If a parent record is updated or deleted, the corresponding child records are also updated or deleted.
  * SET NULL: If a parent record is updated or deleted, the foreign key values in the child records are set to NULL.
  * SET DEFAULT: Similar to SET NULL, but sets the foreign key values to their default values.
  * NO ACTION: No action is taken, and an error is raised if a foreign key constraint would be violated.

### Enforcing Data Integrity

* Foreign keys help maintain data integrity by preventing the creation of orphaned records in the child table. Orphaned records are records in the child table that do not have a corresponding parent record.
* They also ensure that references between tables are valid and consistent.
Creating Relationships:

* Foreign keys are used to create relationships between tables. For example, in a database with a "Students" table and a "Courses" table, a foreign key in the "Courses" table that references the "Student_ID" primary key in the "Students" table can establish a relationship between the two tables.

### Improving Query Efficiency

Foreign keys are often indexed automatically by the DBMS, which can improve the efficiency of queries that involve joining tables based on these keys.

### Example

Consider two tables, "Orders" and "Customers." The "Orders" table might have a foreign key column called "Customer_ID," which references the "Customer_ID" primary key in the "Customers" table. This foreign key ensures that each order in the "Orders" table is associated with a valid customer in the "Customers" table. If a customer is deleted or their ID is changed, the foreign key constraint ensures that related orders are updated or deleted accordingly, preserving referential integrity.  

In summary, foreign keys are a critical component of relational databases, allowing you to create and maintain relationships between tables while enforcing data integrity rules to ensure that the relationships are valid and consistent.

* THERE CAN BE MORE THAN ONE FOREIGN KEY IN TABLE BUT ONLY ONE PRIMARY KEY.
