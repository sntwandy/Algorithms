import turtle

myTurtle = turtle.Turtle()
myWin = turtle.Screen()

def draw(myTurtle, lenght):
    if lenght > 0:
        myTurtle.forward(lenght)
        myTurtle.right(90)
        draw(myTurtle, lenght-1)  
        
draw(myTurtle, 100)
myWin.exitonclick()