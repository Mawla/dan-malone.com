export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        bg-[#eae8e1] 
        min-h-screen
        w-full 
        overflow-visible 
        relative
        pt-6
      "
      style={
        {
          // Design tokens
          "--wrapped-fill": "rgb(249, 247, 246)",
          "--text-primary": "rgb(17, 16, 17)",
          "--text-secondary": "rgba(17, 16, 17, 0.6)",
          "--background-secondary": "rgb(244, 242, 239)",
          "--accent-muted": "rgb(130, 124, 106)",
          // Purple palette
          "--purple-light": "rgb(229, 219, 235)",
          "--purple-mid": "rgb(222, 202, 232)",
          "--purple-dark": "rgb(152, 125, 165)",
          // Green palette
          "--green-light": "rgb(210, 232, 200)",
          "--green-mid": "rgb(193, 222, 175)",
          "--green-dark": "rgb(111, 153, 84)",
          // Blue palette
          "--blue-light": "rgb(220, 228, 234)",
          "--blue-mid": "rgb(204, 211, 217)",
          "--blue-dark": "rgb(148, 161, 170)",
          // Orange palette
          "--orange-light": "rgb(250, 228, 208)",
          "--orange-dark": "rgb(194, 137, 81)",
          WebkitFontSmoothing: "inherit",
          boxSizing: "border-box",
        } as React.CSSProperties
      }
    >
      <div className="w-full max-w-[1600px] mx-auto px-4">{children}</div>
    </div>
  );
}
