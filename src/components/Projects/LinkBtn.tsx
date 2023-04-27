type LinkBtnProps = {
    url: string,
    children: string
}

export default function LinkBtn({ url, children }: LinkBtnProps) {
    return (
        <a href={url} target='_blank' rel='noopener noreferrer'>
            <button>
                {children}
            </button>
        </a>
    )
}