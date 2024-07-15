class microRoute {
  constructor(options) {
    this.reactRender = options.render;
    this.state = {};
    if (window.location.hash) {
      try {
        this.state = JSON.parse(atob(window.location.hash.substring(1)));
      } catch (error) {}
    }
  }
  click = (event, key, value) => {
    event.preventDefault();
    event.stopPropagation();
    this.set(key, value);
  };
  get = (key) => {
    return this.state[key] || null;
  };
  set = (key, value) => {
    if (typeof key === 'object' && !Array.isArray(key) && key !== null) {
      this.state = {
        ...this.state,
        ...key,
      };
    } else {
      this.state = {
        ...this.state,
        ...{
          [key]: value,
        },
      };
    }

    window.location = '#' + btoa(JSON.stringify(this.state));
    this.reactRender();
  };
}

export default microRoute;
