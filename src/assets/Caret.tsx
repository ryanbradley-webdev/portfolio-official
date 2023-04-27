export default function Caret({ isActive }: { isActive: boolean }) {
    const localStyle = {
        fill: isActive ? '#FFFFFF' : '#AAAAAA',
        rotate: isActive ? '90deg' : ''
    }

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" style={localStyle}>
            <path d="M246.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 41.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
        </svg>
    )
}