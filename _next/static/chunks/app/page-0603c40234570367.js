(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7913:function(e,s,i){Promise.resolve().then(i.bind(i,3703))},3703:function(e,s,i){"use strict";i.d(s,{DigitallyPurple:function(){return j}});var t=i(7437),n=i(2265),r=i(2974),l=i(2218),a=i(4839),o=i(6164);function d(){for(var e=arguments.length,s=Array(e),i=0;i<e;i++)s[i]=arguments[i];return(0,o.m6)((0,a.W)(s))}let c=(0,l.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),m=n.forwardRef((e,s)=>{let{className:i,variant:n,size:l,asChild:a=!1,...o}=e,m=a?r.g7:"button";return(0,t.jsx)(m,{className:d(c({variant:n,size:l,className:i})),ref:s,...o})});m.displayName="Button";let u=n.forwardRef((e,s)=>{let{className:i,type:n,...r}=e;return(0,t.jsx)("input",{type:n,className:d("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",i),ref:s,...r})});u.displayName="Input";let h=n.forwardRef((e,s)=>{let{className:i,...n}=e;return(0,t.jsx)("textarea",{className:d("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",i),ref:s,...n})});h.displayName="Textarea";var x=i(1976),p=i(5430),g=i(7746),b=i(2940),f=i(1326),v=i(4086);function j(){let[e,s]=(0,n.useState)("home"),[i,r]=(0,n.useState)({name:"",email:"",message:""}),l=e=>{let{name:s,value:i}=e.target;r(e=>({...e,[s]:i}))},a=async e=>{e.preventDefault(),console.log("Form submitted:",i),r({name:"",email:"",message:""})};return(0,t.jsxs)("div",{className:"bg-purple-50 min-h-screen",children:[(0,t.jsx)("header",{className:"bg-purple-900 text-white p-4",children:(0,t.jsxs)("div",{className:"container mx-auto flex justify-between items-center",children:[(0,t.jsx)("h1",{className:"text-2xl font-bold",children:"Digitally Purple"}),(0,t.jsx)("nav",{children:(0,t.jsx)("ul",{className:"flex space-x-4",children:["Home","Services","PowerPoint Add-in","About","Contact"].map(i=>(0,t.jsx)("li",{children:(0,t.jsx)(m,{variant:"link",className:"text-white ".concat(e===i.toLowerCase()?"bg-purple-700 rounded-md":""),onClick:()=>s(i.toLowerCase()),children:i})},i))})})]})}),(0,t.jsxs)("main",{className:"container mx-auto mt-8 p-4",children:["home"===e&&(0,t.jsxs)("div",{className:"text-center",children:[(0,t.jsx)("h2",{className:"text-4xl font-bold mb-4",children:"Empowering businesses with AI-driven productivity tools"}),(0,t.jsx)("p",{className:"text-lg mb-8",children:"Revolutionizing PowerPoint with our AI-powered add-in"}),(0,t.jsxs)(m,{className:"bg-purple-600 hover:bg-purple-700",onClick:()=>s("powerpoint add-in"),children:["Get Started ",(0,t.jsx)(x.Z,{className:"ml-2"})]})]}),"services"===e&&(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{className:"text-3xl font-bold mb-6",children:"Our Services"}),(0,t.jsx)("div",{className:"grid md:grid-cols-3 gap-8",children:[{title:"AI-Driven Productivity Tools",description:"Enhance efficiency with smart, AI-powered solutions.",icon:(0,t.jsx)(p.Z,{className:"w-12 h-12 text-purple-600"})},{title:"Custom Software Development",description:"Tailored software solutions with AI at their core.",icon:(0,t.jsx)(g.Z,{className:"w-12 h-12 text-purple-600"})},{title:"AI Consultancy Services",description:"Expert guidance on implementing AI in your business.",icon:(0,t.jsx)(b.Z,{className:"w-12 h-12 text-purple-600"})}].map((e,s)=>(0,t.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[e.icon,(0,t.jsx)("h3",{className:"text-xl font-semibold mt-4 mb-2",children:e.title}),(0,t.jsx)("p",{children:e.description})]},s))})]}),"powerpoint add-in"===e&&(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{className:"text-3xl font-bold mb-6",children:"AI-Powered PowerPoint Add-in"}),(0,t.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[(0,t.jsxs)("div",{className:"flex items-start mb-6",children:[(0,t.jsx)(f.Z,{className:"w-12 h-12 text-purple-600 mr-4 flex-shrink-0"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-2xl font-semibold mb-2",children:"Revolutionize Your Presentations"}),(0,t.jsx)("p",{className:"mb-4",children:"Our cutting-edge PowerPoint add-in leverages the latest AI advancements to dramatically improve your slide authoring experience. Create more engaging, professional, and impactful presentations in less time."})]})]}),(0,t.jsx)("h4",{className:"text-xl font-semibold mb-4",children:"Key Features:"}),(0,t.jsxs)("ul",{className:"list-disc list-inside mb-6",children:[(0,t.jsx)("li",{children:"AI-powered content suggestions"}),(0,t.jsx)("li",{children:"Automatic slide layout optimization"}),(0,t.jsx)("li",{children:"Smart data visualization"}),(0,t.jsx)("li",{children:"Real-time design recommendations"}),(0,t.jsx)("li",{children:"Intelligent image selection and placement"}),(0,t.jsx)("li",{children:"Automated slide summarization"})]}),(0,t.jsx)("h4",{className:"text-xl font-semibold mb-4",children:"Benefits:"}),(0,t.jsxs)("ul",{className:"list-disc list-inside mb-6",children:[(0,t.jsx)("li",{children:"Save time on presentation creation"}),(0,t.jsx)("li",{children:"Improve the quality and consistency of your slides"}),(0,t.jsx)("li",{children:"Enhance audience engagement with better visuals"}),(0,t.jsx)("li",{children:"Reduce the learning curve for creating professional presentations"})]}),(0,t.jsx)(m,{className:"bg-purple-600 hover:bg-purple-700",onClick:()=>s("contact"),children:"Request Early Access"})]})]}),"about"===e&&(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{className:"text-3xl font-bold mb-6",children:"About Digitally Purple"}),(0,t.jsx)("p",{className:"mb-4",children:"Digitally Purple is a boutique software consultancy specializing in applying cutting-edge Artificial Intelligence (AI) technologies to productivity tools. Our goal is to empower businesses and individuals by leveraging AI to enhance efficiency, streamline workflows, and unlock new potential for innovation."}),(0,t.jsx)("h3",{className:"text-2xl font-semibold mb-4",children:"Our Core Values"}),(0,t.jsxs)("ul",{className:"list-disc list-inside mb-4",children:[(0,t.jsx)("li",{children:"Innovation: We constantly push the boundaries of what AI can achieve in the productivity space."}),(0,t.jsx)("li",{children:"Client-Centricity: Every solution we provide is based on understanding the unique needs and goals of each client."}),(0,t.jsx)("li",{children:"Efficiency: Our mission is to help businesses do more with less, making every second and every resource count."})]}),(0,t.jsx)("h3",{className:"text-2xl font-semibold mb-4",children:"Our Latest Innovation"}),(0,t.jsx)("p",{className:"mb-4",children:"We're excited to announce our work on an AI-powered PowerPoint add-in. This tool represents our commitment to enhancing productivity through innovative AI applications. By improving the slide authoring experience, we're helping professionals create more impactful presentations with less effort."})]}),"contact"===e&&(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{className:"text-3xl font-bold mb-6",children:"Contact Us"}),(0,t.jsxs)("div",{className:"grid md:grid-cols-2 gap-8",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"mb-4",children:"Ready to enhance your productivity with AI or learn more about our PowerPoint add-in? Get in touch with us:"}),(0,t.jsxs)("div",{className:"flex items-center mb-2",children:[(0,t.jsx)(v.Z,{className:"mr-2"}),(0,t.jsx)("span",{children:"info@digitallypurple.com"})]})]}),(0,t.jsxs)("form",{className:"space-y-4",onSubmit:a,children:[(0,t.jsx)(u,{name:"name",placeholder:"Your Name",value:i.name,onChange:l}),(0,t.jsx)(u,{name:"email",type:"email",placeholder:"Your Email",value:i.email,onChange:l}),(0,t.jsx)(h,{name:"message",placeholder:"Your Message",value:i.message,onChange:l}),(0,t.jsx)(m,{type:"submit",className:"bg-purple-600 hover:bg-purple-700",children:"Send Message"})]})]})]})]}),(0,t.jsx)("footer",{className:"bg-purple-900 text-white p-4 mt-12",children:(0,t.jsx)("div",{className:"container mx-auto text-center",children:(0,t.jsx)("p",{children:"\xa9 2024 Digitally Purple. All rights reserved."})})})]})}}},function(e){e.O(0,[388,971,23,744],function(){return e(e.s=7913)}),_N_E=e.O()}]);