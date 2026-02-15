# ssh keys


1. i create a pvt / pub key
2. i send my pub key to github
3. github grabs a secret and encrypts it using my pub key and sends it to me
4. i decrypt using my pvt key and send it back. 
5. github confirms what i send back with what it has.

pub key is an encoder - we share this with others
pvt key is a decrypter - we keep this.

[https://superuser.com/questions/121307/is-it-reasonable-to-have-multiple-ssh-keys](https://superuser.com/questions/121307/is-it-reasonable-to-have-multiple-ssh-keys)

[https://security.stackexchange.com/questions/20706/what-is-the-difference-between-authorized-keys-and-known-hosts-file-for-ssh](https://security.stackexchange.com/questions/20706/what-is-the-difference-between-authorized-keys-and-known-hosts-file-for-ssh)



public - remote server / github
private - client/me/ubuntu
