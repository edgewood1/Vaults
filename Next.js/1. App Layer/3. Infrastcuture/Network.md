[[OS / Server]]

Network likely refers to the internet

2. **DNS Resolution:** The browser resolves the domain name (`www.example.com`) into an IP address (e.g., `192.0.2.1`) using DNS servers.
    
3. **TCP Connection:** The browser establishes a TCP connection with the server at the resolved IP address and port (80 for HTTP, 443 for HTTPS). This involves a three-way handshake (SYN, SYN-ACK, ACK).
    
4. **TLS/SSL Handshake (HTTPS Only):** If the URL is `https://...`, a TLS/SSL handshake occurs to establish a secure, encrypted connection.

Let's categorize DNS resolution, TCP connection, and TLS/SSL handshake within the client, server, and network framework:

**1. DNS Resolution:**

- **Category:** Primarily **Network**, but initiated by the **Client**.
- **Explanation:**
    - **Client's Role:** The _client_ (usually the browser) initiates the DNS resolution process. It needs the server's IP address before it can connect. The client's operating system and/or browser often have local DNS caches.
    - **Network's Role:** The DNS resolution itself happens on the _network_, involving DNS servers distributed across the internet. The client sends a request to a DNS resolver, which then interacts with other DNS servers. This is _external_ to both your application's client and server.
    - **Server's Role:** Your application's _server_ is _not directly involved_ in the DNS resolution process (unless you're running your own DNS server, which is rare for a typical web application). The _authoritative DNS server_ for your domain is responsible for providing the IP address, but that's a separate server, not your application server.

**2. TCP Connection Establishment:**

- **Category:** **Network**, involving _both_ **Client** and **Server**.
- **Explanation:**
    - **Client's Role:** The client _initiates_ the TCP connection by sending a SYN packet to the server's IP address and port.
    - **Server's Role:** The server's operating system _listens_ for incoming connections on the specified port. When it receives the SYN packet, it responds with a SYN-ACK packet.
    - **Network's Role:** The _network_ (routers, switches, etc.) transmits the packets between the client and server. TCP is a _network protocol_, and the connection is established _over_ the network.
    - **Shared Responsibility:** Both client and server participate in the three-way handshake. It's a network-level interaction between the two endpoints.

**3. TLS/SSL Handshake:**

- **Category:** **Network**, involving _both_ **Client** and **Server**.
- **Explanation:**
    - **Client's Role:** The client initiates the handshake after the TCP connection is established. It sends a "Client Hello" message, specifying the supported TLS/SSL versions and cipher suites.
    - **Server's Role:** The server responds with a "Server Hello" message, selecting a cipher suite, and providing its digital certificate.
    - **Network's Role:** The _network_ transmits the handshake messages between the client and server. The handshake happens _over_ the established TCP connection.
    - **Shared Responsibility:** Both client and server participate in the handshake, exchanging messages to negotiate encryption keys and verify the server's identity.

**Summary Table:**

|   |   |   |   |
|---|---|---|---|
|**Process**|**Client Role**|**Server Role**|**Network Role**|
|**DNS Resolution**|Initiates the request for IP address.|Not directly involved (unless running a DNS server).|Transmits DNS queries and responses between client and DNS servers.|
|**TCP Connection**|Initiates connection (SYN).|Listens for connections, responds (SYN-ACK).|Transmits TCP packets (SYN, SYN-ACK, ACK) between client and server.|
|**TLS/SSL Handshake**|Initiates handshake ("Client Hello").|Responds to handshake ("Server Hello").|Transmits handshake messages over the established TCP connection.|

**Key Takeaways:**

- **DNS Resolution:** Primarily a network function, initiated by the client.
- **TCP Connection:** A network-level interaction between the client and the server's operating system.
- **TLS/SSL Handshake:** A security layer built _on top of_ TCP, also involving both client and server.
- **Application vs. Network:** These steps happen _before_ your application code (Express, Next.js) gets involved. They are handled by the operating system's network stack and the web server software (Node.js, Apache, Nginx). Your application code starts executing at the middleware/routing stage.

This breakdown clarifies where each of these processes fits within the broader client-server-network model. They are essential prerequisites for the HTTP request itself to reach your application code.