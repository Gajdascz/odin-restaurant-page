function buildElementTree({type, attributes={}, text=null, children=null}) {
  let element = document.createElement(type);
  for(const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key,value);
  }
  if(text) element.textContent = text;
  if(children && children.length > 0) {
    children.forEach(child => {
      element.appendChild(buildElementTree(child));
    });
  }
  return element;
}

export { buildElementTree }