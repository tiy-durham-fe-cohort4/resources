# Reshare

You will be building a Hacker News/Reddit competitor... I'm calling it "reshare"
which stands for "resource share" but you can call it whatever you want.

## What it does

If you're not familiar with Hacker News or Reddit, have a quick look here:

https://news.ycombinator.com/

It's a site where users can share links to interesting content. Other users
can vote on a link (up or down), and shared links (shares) are displayed based on some
algorithm. Users can also comment on shares.

When a user shares a link that is offensive or objectionable, site admins can
delete the link. Users can also delete shares that they created. Site admins can
also disable users who are making rude comments or sharing inappropriate links.

## Getting started

You'll want to fork this project, rather than clone it:

- [Reshare](https://github.com/tiy-durham-fe-cohort4/reshare)

The reason you want to fork it is that I may (probably will) need to fix bugs
in the API, and you'll be wanting to pull those!

As for deploying this, you can't deploy it to GitHub pages, since it needs
to run code on the server. We'll be deploying it to Heroku next week, so don't
worry too much about that. Just build it to work locally, and we'll go from
there!

Then, think about what a reasonable MVP might look like.

## Learning Objectives

After completing this assignment, you should understand…

* AJAX calls with Backbone
* Routing in Backbone
* Saving/loading data from an API

## Details

### Deliverables

* A repo containing your Node + Backbone project

### Normal Mode

* A single page Backbone application
* Responsive: It should look good on a mobile phone and on a laptop
* The ability to login with GitHub
* Ability to post a new link
* Ability to see all posted shares
* Ability to upvote
* Ability to downvote
* Ability to undo my vote
* Routing should be used, so these pages (or their equivalents) should exist:
  * Shares list page
  * Shares detail page
  * New share page

### Hard Mode

Do everything in normal mode, but also:

* Ability to comment on a share
* Ability to see comment thread (probably on the share detail page)
* Ability to edit a share you've posted
* Ability to delete a share you've posted

### Nightmare mode

* Ability to add admins to the system
* Ability to remove admin rights from a user
* Ability for admins to remove any share that's been posted
* Ability for admins to remove any comment that's been posted
* Ability to search for a specific share
