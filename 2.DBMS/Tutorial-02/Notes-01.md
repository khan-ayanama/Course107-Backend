# DBMS - Day - 02

## Refrential Integrity

Referential integrity ensures that the relationships between tables are maintained according to the following key principles:

* Uniqueness: Each value in a foreign key column must correspond to a unique value in the referenced primary key column. This ensures that there are no duplicate references.

* Consistency: Data in the referencing table (the one with the foreign key) must be consistent with the data in the referenced table (the one with the primary key). In other words, the foreign key value in the referencing table should always point to an existing primary key value in the referenced table.

* Cascade or Restrict: Referential integrity rules define how changes to data are handled. For example, when a referenced row is deleted or updated, you can choose to cascade changes to related rows in the referencing table (cascading delete or update) or restrict the action if it would violate referential integrity.

## Super Key

a super key is a set of one or more attributes (columns) in a table that can be used to uniquely identify records (rows) within that table. It's a broader concept than a candidate key and can include additional attributes beyond what is strictly required for uniqueness. Here's a more detailed explanation of a super key

* Super set of any candidate key is Super Key.

## ER Model

The Entity-Relationship (ER) model is a conceptual framework used in database design to represent the relationships between entities (objects, concepts, or things of interest) and their attributes. It's a way to visualize the structure of a database before it's implemented in a relational database management system (RDBMS). The ER model uses entities, attributes, and relationships as its main components. Here's an overview of these components:

* Entity: An entity is a real-world object or concept that can be uniquely identified. Entities are typically represented as rectangles in an ER diagram, and they serve as the basis for organizing and storing data in a database. Each entity has a set of attributes that describe its properties.

* Attribute: An attribute is a characteristic or property of an entity. Attributes are used to describe the data that can be stored for an entity. For example, in an entity representing "Employee," attributes could include "EmployeeID," "FirstName," "LastName," and "HireDate."

* Key Attribute: A key attribute is an attribute that uniquely identifies instances of an entity. It is often used to create primary keys in database tables. In the "Employee" example, "EmployeeID" could be a key attribute.

* Relationship: A relationship is an association between two or more entities. Relationships are represented as lines connecting the related entities in an ER diagram. They describe how entities are connected and interact with each other. Relationships can have cardinality constraints that specify how many instances of one entity can be related to instances of another entity.

* Cardinality: Cardinality defines the number of instances of one entity that can be related to the number of instances of another entity. Common cardinality notations include "one" (1), "zero or one" (0..1), "many" (* or 0..n), and "exactly one" (1..1). For example, in a relationship between "Department" and "Employee," the cardinality might indicate that "one department has many employees."

* Weak Entity: A weak entity is an entity that does not have a primary key attribute of its own. It relies on a related strong entity (called the owner entity) for identification. Weak entities are represented with a double rectangle in an ER diagram.

* ISA Hierarchy: In some cases, entities can be organized into a hierarchy using the "ISA" (Is-A) relationship. This represents a specialization/generalization relationship, where one entity is a subtype of another. For example, "Employee" can be a subtype of "Person."

ER diagrams, which visually represent these components, are commonly used during the database design process to create a blueprint for the database schema. They help database designers and developers understand the structure and relationships of the data, which is essential for creating efficient and well-structured databases.

[!Read More](https://www.javatpoint.com/dbms-er-model-concept)

## Relationship types

In a relational database management system (DBMS), relationships are used to define how data in different database tables (or entities) are related or connected to each other. There are several types of relationships in DBMS, including:

### One-to-One (1:1) Relationship

In a one-to-one relationship, each record in one table is uniquely associated with one record in another table, and vice versa.  
This type of relationship is relatively rare and is typically used to separate certain attributes of an entity into a separate table to improve data organization or enforce data integrity.  

* You can reduce one-to-one table into two table

Example: A one-to-one relationship exists between "Employee" and "SecurityBadge" where each employee has one security badge, and each security badge belongs to one employee.

### One-to-Many (1:N) Relationship

In a one-to-many relationship, each record in one table can be associated with one or more records in another table, but each record in the second table is associated with only one record in the first table.

* We can merge into two tables and the primary key will be from many side of table

This is one of the most common types of relationships in DBMS.
Example: An "Author" can write multiple "Books," but each book is written by only one author.  

### Many-to-One (N:1) Relationship

In a many-to-one relationship, many records in one table can be associated with one record in another table. This is the reverse of a one-to-many relationship.  
Example: Multiple "Employees" may report to one "Manager," but each employee has only one manager.

### Many-to-Many (N:N) Relationship

In a many-to-many relationship, multiple records in one table can be associated with multiple records in another table, and vice versa.  
To represent a many-to-many relationship in a relational database, a junction table (also called an associative or link table) is used. This table contains foreign keys that link the two related tables.  

* We can't reduce table as it has primary key is composite key.

Example: "Students" can enroll in multiple "Courses," and each course can have multiple students. To represent this relationship, you might use a junction table called "Enrollments" that links students to courses.

### Self-Referencing Relationship

In a self-referencing relationship, a table is related to itself. This is used when you need to represent hierarchical or recursive data structures.  
Example: In an "Organization" table, each organization may have a parent organization, and that parent organization is also in the same "Organization" table.  

### Unary Relationship

A unary relationship involves a single table, but it represents a relationship between different instances of the same table.  
Example: In an "Employee" table, you might have a unary relationship to represent employees who are mentors to other employees.  

### Supertypes and Subtypes (Generalization/Specialization)

This relationship represents a hierarchy where one table (supertype) is associated with one or more related tables (subtypes). The subtypes inherit attributes and relationships from the supertype.  
Example: "Person" is a supertype, and "Employee" and "Customer" are subtypes. Each subtype has specific attributes and relationships.  

These are the primary types of relationships you'll encounter in DBMS when designing relational databases. The choice of relationship type depends on the specific requirements of your data model and how different entities relate to each other.
