# Git settings

You can configure git by editing your .gitconfig file.

In the terminal, run:

    Atom ~/.gitconfig

Here's what mine looks like... Make sure you change the name and email to be your own!:

    [filter "media"]
    	required = true
    	clean = git media clean %f
    	smudge = git media smudge %f
    [user]
    	name = Chris Davies
    	email = youremailgoeshere
    [color]
    	branch = auto
    	diff = auto
    	status = auto
    [color "branch"]
    	current = yellow reverse
    	local = yellow
    	remote = green
    [color "diff"]
    	meta = yellow bold
    	frag = magenta bold
    	old = red bold
    	new = green bold
    [color "status"]
    	added = yellow
    	changed = green
    	untracked = cyan
    [alias]
    	gui = !sh -c '/usr/local/git/libexec/git-core/git-gui'

## Configuring Terminal to understand git

I've also configured my shell to display which git branch I am in. I did that simply by following the instructions laid out here:

https://github.com/jimeh/git-aware-prompt

## Configuring git to use an editor other than vi

I use Atom, but your mileage may vary:

https://help.github.com/articles/associating-text-editors-with-git/
