import { useEffect } from 'react'
import { CodeBlock, railscast } from "react-code-blocks"
import ArticleHeader from "../ArticleHeader"

const MemoryPointersDynamicProgramming = () => {

  useEffect(() => document.title = 'Memory, Pointers, and Dynamic Programming | Brendan Chess', [])

  return (
    <div class='Article-container'>
      <div class='Article-body'>

        <ArticleHeader
          title='Memory, Pointers, and Dynamic Programming'
          date='January 2022'
        />

        <div class='Article-paragraph'>
        It’s important to understand not just how to write code, but what our computer actually does when we run our code. When we run code, it makes use of memory in our computer. Memory is often called RAM, which is short for random access memory. Random access means that the time memory is used and amount of memory that is used can vary. In other words, memory is a big space that is available for any program to use at any time, in any way that it needs to. But what exactly does memory look like, and how does it relate to the code we write? Let’s get into those details.
        </div>

        <div class='Article-paragraph'>
        Physically, memory is a piece of hardware that is part of your computer, and can come in many sizes. An average amount of memory to have in a computer these days might be around 8 to 16 gigabytes. As the computer sees it, memory is just a long list of 1’s and 0’s. Each space that holds a 1 or 0 is known as a bit. A bit is the smallest denomination of memory. When the computer interacts with memory, it actually doesn’t view the individual bits one by one; instead, it groups memory into cells, each cell composed of 8 bits. The reason for this is that a single bit on its own has little use, so it was decided that grouping them together to form a more useful unit would be more efficient. That grouping of 8 bits is known as a byte, and is the standard unit that we use when we talk about memory in a computer. The choice of exactly 8 bits is somewhat arbitrary, as other sizes have been used to define a byte in the earlier days of computers. It just turned out that 8 became the most popular and widely accepted number, and as such it remains standard today.
        </div>

        <div class='Article-paragraph'>
        Each byte in memory is given a unique identifier. This is called a byte’s address. An address is a number, formatted in hexadecimal. Because memory is like a long list of bytes, the address of a byte increases by one from the byte before it. The byte with address 6 has byte 5 before it, and byte 7 after it.
        </div>  

        <div class='Article-paragraph'>
        When we declare a variable in our program, the computer will choose a byte in memory that isn’t being used and reserve that byte. This byte’s address is now associated with that variable. The value assigned to the variable will be stored there. This process takes place at the beginning of a program’s execution. It is known as static allocation.
        </div>

        <div class='Article-paragraph'>
        A caveat to this is that not all data types can fit in one byte. Many data types require more than one byte of space in memory. In this case, multiple bytes are allocated for a variable. The bytes will all be next to each other and are allocated at the same time. The most common data types that are larger than one byte include <span class='Article-paragraph-code'>int</span> at 4 bytes, <span class='Article-paragraph-code'>float</span> at 4 bytes, and <span class='Article-paragraph-code'>double</span> at 8 bytes. The ones that will fit in one byte are <span class='Article-paragraph-code'>char</span> and <span class='Article-paragraph-code'>boolean</span>.
        </div>

        <div class='Article-paragraph'>
        What about arrays? Well, consider an example of how an array is declared: <span class='Article-paragraph-code'>int numbers[10]</span>. One <span class='Article-paragraph-code'>int</span> takes up 4 bytes in memory. This array will store 10 of them. Therefore, we need 4 x 10 = 40 bytes. Again, these bytes will all be located next to each other in memory.
        </div>

        <div class='Article-paragraph'>
        So this is how memory is allocated when we declare a variable. The computer begins execution of our program by looking through all of the variable declarations in our code and reserving the required bytes in memory. When we allocate memory statically like this, we know how much space we will use. But what if we want our code to be more flexible and have the ability to use varying amounts of memory on each run?
        </div>

        <div class='Article-paragraph'>
        To picture this, let’s consider a program that asks a user for a list of ingredients in a recipe. Our program will store those ingredients in an array. One issue we run into is that not all recipes will have the same number of ingredients. So what should the size of our array be? It’s not efficient to set a constant size for the array, such as <span class='Article-paragraph-code'>string ingredients[10]</span>. But our code won’t compile unless we do this. To solve this problem, let’s talk about how we can access memory dynamically as our program runs. It turns out that we can ask the user what the appropriate size should be before we allocate space.
        </div>

        <div class='Article-paragraph'>
        The technique of allocating memory while our program is running is known as dynamic programming. To do this, we actually don’t declare regular variables; instead, we declare something called a pointer. A pointer is given a data type, just like a variable. An integer pointer would be declared like <span class='Article-paragraph-code'>int* number;</span>. The key idea is that the value of the pointer is actually a memory address. Its data type describes which kind of data is stored at that address. So if the value of <span class='Article-paragraph-code'>int* number</span> is 1000, then we would know that an integer is being stored at the byte with address 1000. The integer actually takes up bytes 1000-1003, since integers require 4 bytes of storage. However, <span class='Article-paragraph-code'>number</span> actually only stores the address of the first byte, 1000.
        </div>

        <div class='Article-paragraph'>
        If we declare our <span class='Article-paragraph-code'>ingredients</span> array from before using a pointer, we don’t have to provide it with a constant size. We can support storage of recipes that have any number of ingredients to them. The size can be determined while the program is running. First, we can ask the user how many ingredients are in their recipe, and store that in a variable. Then, we can use that variable as the size to declare <span class='Article-paragraph-code'>ingredients</span> with. Here is how we can code this:
        </div>

        <div class='Article-code-block'>
        <CodeBlock 
          text={`int number_of_ingredients;

cout << “How many ingredients are in your recipe?” << endl;
cin >> number_of_ingredients;

// Use the new keyword to allocate memory with a pointer
string* ingredients = new string[number_of_ingredients];
`}
          language='cpp'
          theme={railscast}
        />
        </div>

        <div class='Article-paragraph'>
        A side effect of dynamic programming is that while we can allocate new memory during runtime, we should also free up that memory when we are done with it. It is possible that we can actually run out of memory. To free up memory we use the <span class='Article-paragraph-code'>delete</span> keyword. Using <span class='Article-paragraph-code'>delete</span> on a pointer tells it to stop referencing an address. Once that happens, that byte (or sequence of bytes) is no longer recognized as being used for anything. That space can be allocated for something else later on in the program’s runtime. Here is how we would add this to our code from before:
        </div>

        <div class='Article-code-block'>
        <CodeBlock 
          text={`int number_of_ingredients;

cout << “How many ingredients are in your recipe?” << endl;
cin >> number_of_ingredients;

string* ingredients;
ingredients = new string[number_of_ingredients];

// Do something with ingredients

delete[] ingredients;
// All of the bytes in memory used by ingredients are now free
`}
          language='cpp'
          theme={railscast}
        />
        </div>

        <div class='Article-paragraph'>
        We attached the brackets to the <span class='Article-paragraph-code'>delete</span> keyword here because we are deleting an array. If your pointer is not referencing an array, you would just use the <span class='Article-paragraph-code'>delete</span> keyword on its own.
        </div>

        <div class='Article-paragraph'>
        There’s a lot more that you can do with pointers and dynamic programming. In fact, pointers are the backbone to most programs and the data structures that they use. It really just becomes necessary to know how to allocate memory dynamically like this if we want to make more advanced programs. I think it’s good to also keep the fundamental ideas in mind, though.
        </div>

      </div>
    </div>
  )
}

export default MemoryPointersDynamicProgramming