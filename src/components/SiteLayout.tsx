import { ReactNode } from "react"

export function SiteLayout(props: {
    children?: ReactNode
}) {
    return <div id="site-root">
        <div id='site-sidebar'> </div>
        <header id='site-header'> </header>
        <main id='site-main'> </main>
        <footer id='site-footer'></footer>
    </div>
}