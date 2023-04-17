// add pages which you want to the array.
// and make the file in the page folder.

export const routes = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Resources", link: "/resources", class: "resources", subpages: [
    { name: "Region1", link: "/resources/region1" },
    { name: "Region2", link: "/resources/region2" },
    { name: "Region3", link: "/resources/region3" },
    { name: "Region4", link: "/resources/region4" }
  ]},
  // { name: "path name", link: "link url" }, like this
];
