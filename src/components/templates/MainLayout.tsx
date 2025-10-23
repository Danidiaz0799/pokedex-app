import type { ReactNode } from 'react';
import './MainLayout.css';

interface MainLayoutProps {
  header: ReactNode;
  children: ReactNode;
}

/**
 * Template: MainLayout
 * Layout principal de la aplicación con header fijo
 */
const MainLayout = ({ header, children }: MainLayoutProps) => {
  return (
    <div className="main-layout">
      {header}
      <main className="main-layout__content">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
