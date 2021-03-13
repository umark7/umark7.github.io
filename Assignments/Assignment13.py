# Part A
myList=[1,2,3,4,"Hello"]

myList2 = [None]* 4
for i in range(1, len(myList)):

    myList2[i-1] = myList[i]

print(myList2)

myList2.append("new Item")
print(myList2)

myList2.pop(2)

print(myList2)


# Part 2

#Assignment part2: print out one message for each method
count(sub,[start,[end]]) 
#prints out the count of the arr

endswith(suffix,[start,[end]])
# Prints out the end of the array

find/index(sub,[start,[end]])
#find the index of the array

isalnum()
# returns true if all the chars are alphanumeric

isalpha()
# checks if all characters in the text are letters
isdigit()
# checks if all characters in the text are digits
islower()
# checks if all characters in the text are lowercase
isspace()
# checks for spaces in the text 
istitle()
## checks for title in the text
isupper()
#returns True if all the characters are in upper case
join()
#join() method takes all items in an iterable and joins them into one string. 
lower()
#lower() method returns the lowercased string from the given string. It converts all uppercase characters to lowercase
replace(old,new[,count])
# replaces the value in array
split([sep[,maxsplit]])
#split Split a string into a list where each word is a list item:
splitlines([keepends])
# The splitlines() method splits the string at line breaks and returns a list of lines in the string
startswith(prefix[,start[,end]])
#tells us where the array starts with 
strip([chars])
#Remove spaces at the beginning and at the end of the string:
upper()
#The upper() method returns a string where all characters are in upper case. Symbols and Numbers are ignored.