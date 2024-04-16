import React from "react";
import Box from "@mui/material/Box";
import { SxProps } from "@mui/material/styles";

interface MultiStepPageProps {
  id: string;
  activeId?: string;
  sx?: SxProps;
}

interface MultiStepControlProps {
  navigateTo: (_id: string) => void;
}

interface MultiStepCountProps {
  pageCount?: number;
  activePageIndex?: number;
}

const MultiStepPage = ({ children, activeId, id, sx }: React.PropsWithChildren<MultiStepPageProps>) => {
  if (activeId !== id) return null;
  return <Box sx={sx}>{children}</Box>;
};
MultiStepPage.displayName = "MultiStep.Page";
MultiStepPage.isMultiStepPage = true;

function isMultiStepPage(child: React.ReactNode): child is React.ReactElement<MultiStepPageProps> {
  return React.isValidElement(child) && (child.type as typeof MultiStepPage).isMultiStepPage;
}

interface MultiStepContextValue {
  pageCount: number;
  activeId?: string;
  activePageIndex: number;
  navigateTo: (_id: string) => void;
}

const MultiStepContext = React.createContext<MultiStepContextValue | undefined>(undefined);

export const useMultiStepContext = () => {
  const context = React.useContext(MultiStepContext);
  if (context === undefined) {
    throw new Error("useMultiStepContext must be used within a MultiStep");
  }
  return context;
};

export function withMultiStepCount<T extends MultiStepCountProps>(Component: React.ComponentType<T>) {
  return function MultiStepCount(props: Omit<T, keyof MultiStepCountProps>) {
    const { pageCount, activePageIndex } = useMultiStepContext();
    return <Component {...(props as T)} pageCount={pageCount} activePageIndex={activePageIndex} />;
  };
}

export function withMultiStepControls<T extends MultiStepControlProps>(Component: React.ComponentType<T>) {
  return function MultiStepControls(props: Omit<T, keyof MultiStepControlProps>) {
    const { navigateTo } = useMultiStepContext();
    return <Component {...(props as T)} navigateTo={navigateTo} />;
  };
}

export const MulitStepControls = ({
  children,
}: {
  children: (_props: { navigateTo: (_id: string) => void }) => React.ReactNode;
}) => {
  const { navigateTo } = useMultiStepContext();
  return <Box>{children({ navigateTo })}</Box>;
};

export const MultiStep = ({ children, sx }: { children: React.ReactNode; sx?: SxProps }) => {
  const pages = React.Children.toArray(children).filter(isMultiStepPage);
  const pageCount = pages.length;
  const firstPage = pages[0];
  const [activeId, setActiveId] = React.useState<string | undefined>(
    firstPage ? (firstPage.props.id as string) : undefined,
  );
  const [activePageIndex, setActivePageIndex] = React.useState<number>(0);
  const navigateTo = (id: string) => {
    setActiveId(id);
    setActivePageIndex(pages.findIndex((page) => page.props.id === id));
  };

  return (
    <MultiStepContext.Provider value={{ pageCount, activeId, activePageIndex, navigateTo }}>
      <Box sx={sx}>
        {React.Children.map(children, (child) => {
          if (isMultiStepPage(child)) {
            return React.cloneElement(child, { activeId });
          }
          return child;
        })}
      </Box>
    </MultiStepContext.Provider>
  );
};

MultiStep.Page = MultiStepPage;
MultiStep.Controls = MulitStepControls;
