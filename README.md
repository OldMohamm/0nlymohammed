# 0nlymohammed
HTB
Let’s find out if we are lucky enough. Looks like now we have to deal with logins. Go ahead and explore how the login behaves. On passing some random string in the input box, you’ll see a warning: Authentication failed. Now notice the query parameter in URL: /login?message=Authentication%20failed and the message is getting rendered on the page. So possible XSS
