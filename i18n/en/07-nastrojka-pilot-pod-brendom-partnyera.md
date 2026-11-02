---
title: "Setting up PILOT under a partner's brand"
---

PILOT can be used under your company's brand, with your own domain and branding. To prepare for launch you will need:

— a domain name

— access to DNS settings

— an SSL/TLS certificate

— a logo and brand materials

— contact details of the employee who will approve the final design

If your company has an IT administrator, we recommend involving them in setting up DNS and preparing the SSL/TLS certificate.

## 1\. Prepare a domain name

Choose the domain your customers will use to open the platform. For example: app.company.com or company.com. Register the domain with an accredited domain registrar.

The domain must be registered to your company. To keep control of the domain, we recommend that you:

-   register the domain through a corporate account
    
-   enable two-factor authentication
    
-   keep the e-mail address on the account up to date
    
-   enable automatic domain renewal
    

Do not register the domain through the personal account of an employee, contractor, or third party, because access to it may later be lost.

### What to send to PILOT technical support

Tell us the exact domain name you want to use.

PILOT technical support will tell you which IP address the domain must point to and which additional DNS records, if any, are needed.

## 2\. Set up the domain connection to PILOT

After you receive the IP address from PILOT technical support, change the DNS settings of your domain. They are usually available in the domain registrar's or DNS provider's panel.

### What to do

1\. Open the DNS settings of the domain

2\. Create or edit an A record

3\. Fill in the Name / Host field:

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp;&nbsp; Platform address</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Field value</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Main domain, for example company.com</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; @</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Subdomain, for example app.company.com</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; app</span></div></td></tr></tbody></table>

4\. In the **Value / IP Address** field, enter the IP address you received from PILOT technical support

5\. Check whether there are other A or AAAA records for the same domain or subdomain. If they point to a different server, you may need to delete them

6\. Save the changes

Do not delete DNS records if you are not sure what they are for. They may be required for e-mail, domain ownership verification, or other services.

If you use a CDN, a proxy, or a web application firewall (WAF) such as Cloudflare, enable proxying for the new domain or subdomain only after agreeing it with PILOT technical support.

DNS changes may take effect within a few minutes or take up to 24 hours.

### What to send to PILOT technical support

Send one of the following:

— a screenshot of the DNS records

— a text copy of the records you configured

PILOT technical support will check whether the domain is configured correctly.

## 3\. Prepare an SSL/TLS certificate

An SSL/TLS certificate is required for secure access to the platform over HTTPS.

The certificate must cover every domain name that users will use to open the platform. For example, if both company.com and www.company.com must work, the certificate must include both names.

You can use:

-   one certificate with both names in the SAN field (the list of alternative names)
    
-   separate certificates, if agreed with PILOT technical support
    

If you have not worked with SSL/TLS certificates before, pass this section to your IT administrator, hosting provider, or certificate vendor.

### 1) Agree on the certificate parameters

Before buying a certificate, agree the required domain names and the CSR parameters (certificate signing request) with PILOT technical support.

### 2) Purchase a certificate

Purchase a publicly trusted SSL/TLS certificate from a reliable certificate authority or its authorized reseller. Browsers recognize a publicly trusted certificate as trusted.

You can use the following types of certificates:

-   **DV** — with domain ownership validation
    
-   **OV** — with organization validation
    
-   **EV** — with extended organization validation
    

If you have no special requirements, a DV certificate is usually enough.

### 3) Create a CSR and a private key

When ordering a certificate, you usually need to create:

-   **CSR (Certificate Signing Request)** — a request to issue a certificate
    
-   **a private key**
    

<table><tbody><tr><td><span></span></td><td><div>Keep the private key in a secure place. If it is lost, the certificate authority cannot recover it.</div></td></tr></tbody></table>

### 4) Confirm domain ownership

The certificate authority may offer one of these ways to confirm domain ownership:

-   add a DNS record
    
-   upload a file to the website
    
-   confirm by e-mail
    

If confirmation through DNS is required, PILOT technical support can help with this step if needed.

### 5) Download the certificate files

After the certificate is issued, download the full set of its files.

### What to send to PILOT technical support

Send the files in PEM/Base64 format. These files usually have the extensions .pem, .crt, or .cer.

As a rule, the following set is required:

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; File</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; What it contains</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Server certificate</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; The certificate issued for your domain</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Intermediate certificates / certificate chain</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; All intermediate certificates of the certificate authorities, in the order provided by the certificate authority</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Root certificate</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; The root certificate authority's certificate that matches the certificate chain</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Private key</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; The key created together with the CSR</span></div></td></tr></tbody></table>

If the certificate authority provides all the files in one archive, you can send the original archive and explain the purpose of each file.

If the root certificate is not in the set, download it from your certificate authority's official repository.

Before sending, make sure that:

— the certificate was issued for the agreed domain

— it includes all the required domain names

— the private key matches the certificate

A certificate issued for a different domain, or one that does not contain the required name in the SAN field, cannot be used.

<table><tbody><tr><td><span></span></td><td><div>The private key is confidential information. Do not send it over an unprotected public channel. Use a secure transfer method agreed with PILOT technical support.</div></td></tr></tbody></table>

## 4\. Send the brand materials

Send your current brand book in PDF format, if you have one, and the source files of your brand materials.

It is best to include in the set:

-   the logo in a vector format: SVG, AI, or EPS
    
-   the logo in PNG format with a transparent background
    
-   logo variants for light and dark backgrounds
    
-   brand colors
    
-   requirements for the minimum logo size and the clear space around it
    
-   a favicon (the site icon)
    
-   mobile app icons, if needed
    
-   contact details of the employee who will approve the final design
    

### If you don't have a brand book

You can prepare the materials without a brand book. In this case, send at least:

-   the logo
    
-   the main brand colors
    
-   the company or product name you want to use
    
-   a favicon, if you have one
    
-   contact details of the employee responsible for approving the design
    

PILOT technical support will tell you whether additional materials are needed.

## 5\. Agree on the launch

After receiving the materials, PILOT technical support will check:

-   the domain name
    
-   the DNS settings
    
-   the SSL/TLS certificate files
    
-   the brand materials
    

Based on the results of the check, technical support will confirm whether everything is ready to set up the platform under your brand. If any data or files are missing, you will be told what to add or correct.

After the check is complete, PILOT technical support will perform the setup and agree the launch date with you.

After the configuration is agreed, notify PILOT technical support in advance if you plan to:

— change the DNS records used to connect the platform

—  reissue or replace the SSL/TLS certificate
