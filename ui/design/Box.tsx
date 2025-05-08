interface BoxProps {
    children: React.ReactNode;
    className?: string;
}
export const Box: React.FC<BoxProps> = ({ children, className }) => {
    return (
        <div className={` shadow-md rounded-lg p-4 ${className}`}>
            {children}
        </div>
    );
}