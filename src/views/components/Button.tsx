import styled from "@emotion/styled";

const ButtonContainer = styled.span<{ disabled: boolean }>(
    {
        display: "inline-block",
        padding: "0px 4px",
        userSelect: "none",
        boxShadow:
            "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
        borderRadius: 4,
        marginLeft: 4,
        border: "1px solid transparent",
        lineHeight: "24px",
        fontFamily: "华文新魏",
    },
    ({ theme, disabled }) => ({
        "&:hover": {
            backgroundColor: disabled ? "white" : theme.colors.active, // 统一UI风格
            color: disabled ? "grey" : "white",
        },
        backgroundColor: "white",
        color: disabled ? "grey" : "black",
    }),
);

export default function Button({
    onClick,
    children,
    disabled,
    style,
    onMouseEnter,
    onMouseLeave,
}: {
    onClick?: () => void;
    children: React.ReactNode;
    disabled?: boolean;
    style?: React.CSSProperties;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}) {
    return (
        <ButtonContainer
            style={{
                cursor: disabled ? "not-allowed" : "pointer",
                ...style,
            }}
            disabled={!!disabled}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {children}
        </ButtonContainer>
    );
}