
# *****************************Python List***********************************

# list can contain different types
lst = ["Apple",110,"Banana","Pomogrenade","Grapes",9]
print (lst)

# element can be update on any index of list
lst[2]=7
print (lst[2])

# iterate through a list
for x in lst:
  print(x)
  
# check whether element is exist in list
if "Banana" in lst:
  print("Banana exist")
else:
  print("Banana has been eaten")
  
# length of list
print("numbe of frutes are " + str(len(lst)))

# append element at the end of list
lst.append(92)
print(lst)

# insert elemend in specified index
lst.insert(-3,"Peach")
print(lst)

# remove specified index element
lst.remove("Apple")
print(lst)

# remove last or specified index element
lst.pop()
print(lst)

# del delete entire or specific element
del lst[0]
print(lst)

#after assgining, check change to lst reflect to lst2, yes
lst2=lst
print(lst)
print(lst2)
lst.append("Carrot")
print(lst2)

# copy function copy the object with new instance
lst2=lst.copy()
print(lst2)

#after copy function check change to lst reflect to lst2, no
lst.append("Onion")
print(lst2)

#copy list using list method
lst2.append("copytolst3")
lst3 = list(lst2)
print(lst3)

# create list using list constructor
list4 = list(("keyboard","mouse","f1"))
print(list4)

# count the specified element
print(list4.count("f1"))

# extending with adding other list elements
list4.extend(lst3)
print(list4)

# index return the index of first occurence
print(list4.index("mouse"))

# reverse the order of the list (in memory)
list4.reverse()
print(list4)

# reversed() return iterator with reverse order
ralph = reversed(list4)
for x in ralph:
  print(x) 

# iter() returns iterator object 
x = iter(["apple", "banana", "cherry"])
print(next(x))
print(next(x))
print(next(x)) 

# calling variable before intializing, wait for initialzing and call it instead of giving error
print(cars)
cars = ['Ford', 'BMW', 'Volvo']
print(cars)
# sort method(in memory)gument sort with asc order
cars.sort(reverse=True) 
print(cars)

# Sort the list by the length of the values:
# A function that returns the length of the value:
def myFunc(e):
  return len(e)
cars = ['Ford', 'Mitsubishi', 'BMW', 'VW']
cars.sort(key=myFunc)
print(cars)

# Sort a list of dictionaries based on the "year" value of the dictionaries:
# A function that returns the 'year' value:
def myFunc(e):
  return e['year']

cars = [
  {'car': 'Ford', 'year': 2005},
  {'car': 'Mitsubishi', 'year': 2000},
  {'car': 'BMW', 'year': 2019},
  {'car': 'VW', 'year': 2011}
]
cars.sort(key=myFunc) 
print(cars)

# clear make empty the list
lst.clear()
print(lst)
