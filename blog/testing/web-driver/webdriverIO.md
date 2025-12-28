__how to debug broswer.execute__
    
    get password() {
        const x = browser.execute(`
        const x = ${this.selectors.password}.value;
        return x;
        `)
        console.log(x)
    }

  __original loadingDone__

        loadingDone() {
        return () => browser.execute(`
        if (!${this.selector}) {
          return true;
        }
        var loadingEl = ${this.selector}.shadowRoot.querySelector('cs-progress');
        return (!!loadingEl && loadingEl.style.display === "none");
      `).value;
    }

__login page loaded?__

address for cs-progress. if absent, then login loaded
    $('cs-app').shadowRoot.querySelector('login-page').shadowRoot.querySelector('cs-progress')
        
    loadingDone() {
        return () => browser.execute(`
        if (document.querySelector('cs-app').shadowRoot.querySelector('login-page').shadowRoot.querySelector('cs-progress')) { return false } else { return true }
      `).value;
 
    }

  /// working

    confirmSecurity() {
        const button = `${this.selector}.shadowRoot.querySelector('#security')`;
        console.log(button)
        interactions_1.simulateTap(button);
    }

        isSecurityDialogOpen() {
        // document.querySelector('#overlay').opened
        var x = browser.execute(() => {
            const all = document.querySelector('cs-app').shadowRoot.querySelector('login-page').shadowRoot.querySelector('#security')
            return all;
        });
        
        console.log('hola', x)
        if (x.value) { return true } else { return false;}
        // return x.value;
        // return browser.execute(`return ${this.selector}.$.security.opened;`).value;
    }

__app.js loaded?__

app uses #spinnerContainer that is always present, but display = none if disappears.  

__inbox page loaded ?__

expect(!!inboxPage).to.equal(true);

__test results__

steps
3. not given time to change? 
 - wrongPassword instead of nothing.

6. 1\ instead of ''
7. testpa$$ instead of ''