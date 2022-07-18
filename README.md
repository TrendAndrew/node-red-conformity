# TrendMicro Cloud One Node-RED Client Nodes


# Overview



# Documentation


## Flow example


## How it works




## A few notes about working behind a corporate proxy

I realise the majority of enterprise installations will be working behind a proxy. This just requires a few extra steps for installation of node-red, node-red plugins and connection. But this these nodes have been installed successfully in quite a few large organisations with strict security with no issues. Just take some time to work out the extra steps required as a vanilla node-red installation does not readily support this deployment without a little extra work.

Bear in mind also, if you are prototyping this for an organisation on a workstation or VM, you are most likely going to need a few exceptions or to run with something like fiddler. This is a well known requirement for utilising node-red behind a proxy and is by virtue of how proxies work. The solutions are available and you just need to choose the combination appropriate for your environment.

Once you are installing into production, the process should become easier as proxy rules can be attached to appropriate server classes/groupings to allow unauthenticated proxy traffic or proxy bypass to required endpoints as you see fit in your organisation. 

# Bugs and Feedback


# LICENSE

Copyright (c) 2018 Andrew Longhorn <Andrew_Longhorn@TrendMicro.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
