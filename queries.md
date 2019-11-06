# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

select p.productid,p.productname,c.categoryname 
from Products as p
join categories as c
 on p.categoryid = c.categoryid;

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

SELECT o.orderid, s.shippername FROM Orders as o
join shippers as s
on o.shipperid = s.shipperid;

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

select p.productid, p.productname, o.quantity
from OrderDetails as o
join products as p 
on p.productid = o.productid
where orderid = 10251
order by p.productname;

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

select o.orderid,c.customername,e.lastname
from orders as o
join customers as c,employees as e
on c.customerid = o.customerid and e.employeeid = o.employeeid;

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

SELECT
    c.CategoryName,
   COUNT(p.CategoryID) AS NumberOfProducts
FROM Categories AS c
JOIN Products AS p
    ON p.CategoryID = c.CategoryID
GROUP BY c.CategoryName;

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records.

SELECT
    od.OrderID,
   SUM(od.Quantity) AS ItemCount
FROM OrderDetails AS od
GROUP BY od.OrderID;