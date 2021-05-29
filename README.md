# ReactShoppingCart
Recruitment task for Code Concept - company from Gliwice

Prepare an online store basket compatible with the visualization from the file cart-design.png
Use any of the frontend frameworks to solve the task.

1) You will find the necessary pictures in the images folder.
2) The font used is Roboto
3) Product data is located in the data folder, they have been divided into two .json files with a one-to-one relationship (productId -> id)
4) Build the application in a way that allows you to add more products
5) Remember that the online store basket can be displayed on different types of devices
6) Add the logic below:
- the ability to increase / decrease the number of items in the basket by clicking the +/- buttons
- the update of sums of values is done automatically
- shipping value (next to the SHIPPING inscription) should depend on the value of the total of articles, articles up to the amount of $ 100 (inclusive) shipping cost $ 23.80, above $ 100 shipping $ 0 (free)
- Subtotal value shows the sum of the value of the items excluding shipping costs
- Grand Total shows the sum of Subtotal and SHIPPING
- clicking "Proceed to checkout" displays the message "Your order has been submitted successfully"
