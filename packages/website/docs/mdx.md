---
id: mdx
title: Demo of component
---


import Button from '@material-ui/core/Button'

import MyButton from 'mybutton'
import MyButton2 from '@namespace/button'


export const Highlight = ({children, color}) => <h1>This is a component</h1>


<Highlight />

<Button  color="primary">Hello world</Button>

<button>Hello world to you too</button>


<MyButton />
<MyButton2 />


