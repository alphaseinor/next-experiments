import {Menu} from '@headlessui/react'
import Link from 'next/link'

const BlogPage = () => {
    return (<header>
        <Menu as="nav">
            <Menu.Button aria-label="menu" alt="menu" >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
            </Menu.Button>
            <Menu.Items as="ul">
            <Menu.Item as="li">
                    <Link href="/">Home</Link>
                </Menu.Item>
                <Menu.Item as="li">
                    <Link href="/blog">Blog</Link>
                </Menu.Item>
            </Menu.Items>
        </Menu>
    </header>)
}

export default BlogPage