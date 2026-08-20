import { useIsDesktop } from "../../hooks/useMediaQuery";
import MobileLayout from "./MobileLayout";
import DesktopLayout from "./DesktopLayout";

export default function ResponsiveLayout({ children }) {
  const isDesktop = useIsDesktop();
  return isDesktop ? <DesktopLayout>{children}</DesktopLayout> : <MobileLayout>{children}</MobileLayout>;
}
