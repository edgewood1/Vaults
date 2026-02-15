# Route 53

# 

- Purchased a domain here
- Create a hosted zone
- NS SOA are quick

Amplify
- Custom domains / domain management
- SSL creation
- SSL configuration: 
- **Creating records associated with your domain...**
	- **Gets stuck here?** 
	- **Creates Cname**
- **Domain activation is last step**

Other terms
- Alias
- Value / route traffic to

Records

Name - random digits OR url
Type - a name / name
Came has random digits, soa and ns has wildwoodrose



## The SSL configuration process for a new custom domain on AWS Amplify can take up to 24 hours to complete. If the domain is still inactive after 24 hours, you can try the following: 


* Clear the DNS cache: This will ensure you have the most up-to-date DNS records for your domain. 
* Remove and re-add the custom domain: However, doing this more than once in a 24 hour period can result in longer verification wait times. 
* Update your CNAME records: After creating your custom domain, it's important to update your CNAME records as soon as possible. If you added or updated your CNAME records a few hours after creating your app, this can cause your app to get stuck in the Pending Verification state.

I was having this same issue, and it turned out that my NS records listed under "Hosted zones" didn't match those under "Registered domains." All this is on the Route 53 dashboard. So I updated the ones under "Registered domains" and now everything is working.