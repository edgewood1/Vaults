HTML routines

PARTS OF DOC

<!DOCTYPE html>
<html lang="en-us">
<head>
  <meta charset="UTF-8">
  <title>My First Page</title>
</head>
<body>
	<header></header>
</body>
</html>

Header Tags – 

H1 – biggest / h6 – smallest

Divisions

<div>
<section>

Ordered List (numbered)

<h2> Title
<ol>
<li>

Unordered List (bullets)

<h2> Title
<ul> 
<li>

Table

<table>
	<tr>
		<th> headers
	<tr>
		<td> entries

Inline frame

•	Id – for reference
•	Type – 
•	Src – specifies URL of document

ANCHORS AND LINKS. (HREF)

it’s NOT dumping file into tag space.  Reference used as needed when link click or tag requires CSS painting -  

<a rel="nofollow" href="http://www.functravel.com/">Cheap Flights</a>

<link rel="stylesheet" href="style.css" />

Href = “#” – link goes no where

Href attributes

Target=”_blank” – opens a new tab

IMAGES AND SCRIPT FILES. (SRC)

<img src="the_image_link" />
<script type="text/javascript" src="" />

src (Source) attribute just embeds the resource in the current document at the location of the element's definition. For eg. When the browser finds

It is similar to dumping the contents of the js file inside the script tag.
first, browser executes file, then it loads page

 Image attributes

Alt = gives a title

HTML as CSS

<strong><a>bold</a></strong>
<li><strong>bold</strong><a></a></li>

<head>
<style>…</style>
</head>
<body></body>

