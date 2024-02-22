type Props = {
    svgUrl: string,
    size?: number
    className?: string,
    color?: string
}

export const SvgEdit = (({ svgUrl, className, size, color }: Props) => {
    return <div
        style={{
            width: `${size ? size : 24}px`,
            height: `${size ? size : 24}px`,
            backgroundColor: color,
            maskImage: `url(${svgUrl})`,
            WebkitMaskImage: `url(${svgUrl})`,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            maskPosition: "center"
        }}
        className={className} />
})