# code-louisville-

<h2>Description</h2>
I have rebuilt my wifes Salons website. At the time of starting code louisville the website that they had was built using wordpress and getting hacked on the daily. Nothing was layed out in a way that you could find what you needed. The salon likes the minimalist approach and I wanted the website to stick with that same theme. I chose to add an email contact form with a message box so that visitors could ask a question online as well.

<h2>Custom CSS Classes</h2>
<ol>
<li>.footer

   - This class has a fixed position, width to span the whole page, dark gray background color, white text, and center aligned.
<li>.background

   - Simply set to change the background to a light gray.
<li>img

   - border-radius making the images on the page a circle look.
<li>.about, .services, .month, and .contact

   - used text align to center.
<li>.contact and .services

   - used list-style-type set to none to remove bullets

<h3>CSS classes for the JS email form</h3>
<li>div#eform

     -- margin top & bottom, padding top & bottom used to center and space the info inside the form 
     -- text align used to center text
     -- border-radius rounding off the corners of the border
     -- border and box-shadow create the border and gave it a shadow
     -- width to span the form across the bottom of the page making it more noticeable
     -- background-color to give it a little bit different color
<li>input[type="submit"]

     -- width was used to make the button span across the container more
     -- padding was used to give the buttons text some space
	   -- background color changed the button to a shade of gold
	   -- border used to highlight the button 
	   -- font-size and weight make the font bigger and more noticeable
	   -- cursor used to change arrow to a pointer
	   -- border radius rounding the button
<li>textarea

    -- width to span the container and height to make larger
    -- border to make the text boxes more visible
    -- padding, margin bottom & top to give them some spacing between each text box.
    -- resize so that nothing is resized 
<li>input[type="text"]

    -- width and height make the text area larger and more visible
    -- margin top & bottom, padding to give the text some room 
    -- border to help it stand out
<li>label

    -- font-size change the size of the text for name and email
<li>mlabel

    -- font-size to make sure the font matches name and email 
    -- margin bottom is to help center the message label with the text area. 
<li>hr

    -- margin-top gives some space between the contact colmn
    -- background-color to change the color of the back ground
<h3>Customer JavaScript functions</h3>

-- The JavaScript I built for the Email form
