Twify-Tooltip
=============

A simple jQuery Tooltip.

Requires: **jQuery**    
*Tested with jQuery 1.10.1*

Create the tooltip with **Twify.Tooltip();**

**Config:**
```
Id (str): The unique ID used on the tooltip.

Attr (str): The attribute inside of an element used to trigger the Tooltip on hover.
Example: <div twify-tooltip="Hello World!"></div>

Padding (int): The amount of padding.

Font (obj):
   Size (int): Font Size
   Style (str): Font Style

Color (str): Text color.
  
Background (str): Background color.

Shadow (obj):
    Box (obj):
      Color (str): Background color of the shadow for the tooltip.
      Size (arr): Sizes of the box shadow in px.
    
    Text (obj):
      Color (str): Color of the background shadow for text.
      Size (arr): Sizes of the shadow in px.

Border (obj):
    Color (str): Color of the border.
    Size (int): Size of the border in px.
    Type (str): Border type (solid, dotted, etc)
    Radius (int): Border Radius in px
```
