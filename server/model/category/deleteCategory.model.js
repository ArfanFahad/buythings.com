/*

This section has some serious logic like deleting category, 

suppose you delete a category and there are some product who were 
referenced this category? what happened then, it will create referential
integrity problem, so for this problem we can apply logic like, 

the category can be deleted if only that category doesn't have any data,
otherwise an error message will be shown 



*/
