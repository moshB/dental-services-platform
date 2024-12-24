import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MainNav } from "./components/MainNav";
import { Footer } from "./components/Footer";
import Index from "./pages/Index";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Search from "./pages/practices/Search";
import Directory from "./pages/practices/Directory";
import DentistProfile from "./pages/practices/DentistProfile";
import PracticeDetails from "./pages/practices/PracticeDetails";
import ProcedureDetails from "./pages/practices/ProcedureDetails";
import PracticeResources from "./pages/practices/PracticeResources";
import Catalog from "./pages/materials/Catalog";
import MarketInsights from "./pages/data/MarketInsights";
import AboutUs from "./pages/AboutUs";
import Privacy from "./pages/legal/Privacy";
import Cookie from "./pages/legal/Cookie";
import Terms from "./pages/legal/Terms";
import MaterialsPractice from "./pages/practice/MaterialsPractice";
import PatientDashboard from "./pages/patient/PatientDashboard";
import InventoryManagement from "./pages/practice/InventoryManagement";
import Orders from "./pages/practice/Orders";
import FAQs from "./pages/FAQs";
import SupplierDashboard from "./pages/supplier/SupplierDashboard";
import SupplierProducts from "./pages/supplier/SupplierProducts";
import PracticeSettings from "./pages/practice/PracticeSettings";
import StaffManagement from "./pages/practice/StaffManagement";
import StaffDirectory from "./pages/practice/staff/StaffDirectory";
import RolesManagement from "./pages/practice/staff/RolesManagement";
import PerformanceReviews from "./pages/practice/staff/PerformanceReviews";
import Campaigns from "./pages/practice/marketing/Campaigns";
import Reviews from "./pages/practice/marketing/Reviews";
import SocialMedia from "./pages/practice/marketing/SocialMedia";
import { SupplierSettings } from "./components/supplier/SupplierSettings";

const queryClient = new QueryClient();

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const userType = localStorage.getItem("userType");
  const isSignedIn = localStorage.getItem("isSignedIn") === "true";

  if (!isSignedIn) {
    return <Navigate to={`/auth/${userType || 'patient'}/login`} replace />;
  }

  return <>{children}</>;
};

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <div className="min-h-screen flex flex-col">
            <Toaster />
            <Sonner />
            <MainNav />
            <main className="flex-1 px-4 md:px-0">
              <Routes>
                <Route path="/" element={<Index />} />
                
                {/* Patient Auth Routes */}
                <Route path="/auth/patient/login" element={<Login userType="patient" />} />
                <Route path="/auth/patient/register" element={<Register userType="patient" />} />
                
                {/* Practice Auth Routes */}
                <Route path="/auth/practice/login" element={<Login userType="practice" />} />
                <Route path="/auth/practice/register" element={<Register userType="practice" />} />
                
                {/* Supplier Auth Routes */}
                <Route path="/auth/supplier/login" element={<Login userType="supplier" />} />
                <Route path="/auth/supplier/register" element={<Register userType="supplier" />} />
                
                <Route path="/practices/search" element={<Search />} />
                <Route path="/practices/directory" element={<Directory />} />
                <Route path="/practices/:id" element={<PracticeDetails />} />
                <Route path="/practices/dentist/:id" element={<DentistProfile />} />
                <Route path="/practices/procedures/:id" element={<ProcedureDetails />} />
                <Route path="/practices/resources" element={<PracticeResources />} />
                <Route path="/materials/catalog" element={
                  <ProtectedRoute>
                    <Catalog />
                  </ProtectedRoute>
                } />
                <Route path="/data/insights" element={<MarketInsights />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/legal/privacy" element={<Privacy />} />
                <Route path="/legal/cookie" element={<Cookie />} />
                <Route path="/legal/terms" element={<Terms />} />
                <Route path="/practice/materials" element={<MaterialsPractice />} />
                <Route path="/patient/dashboard" element={
                  <ProtectedRoute>
                    <PatientDashboard />
                  </ProtectedRoute>
                } />
                <Route path="/practice/inventory" element={<InventoryManagement />} />
                <Route path="/practice/orders" element={<Orders />} />
                <Route path="/practice/settings" element={<PracticeSettings />} />
                <Route path="/practice/staff" element={<StaffManagement />} />
                <Route path="/practice/staff/directory" element={<StaffDirectory />} />
                <Route path="/practice/staff/roles" element={<RolesManagement />} />
                <Route path="/practice/staff/reviews" element={<PerformanceReviews />} />
                <Route path="/practice/marketing/campaigns" element={<Campaigns />} />
                <Route path="/practice/marketing/reviews" element={<Reviews />} />
                <Route path="/practice/marketing/social" element={<SocialMedia />} />
                <Route path="/faqs" element={<FAQs />} />
                
                <Route path="/supplier/dashboard" element={
                  <ProtectedRoute>
                    <SupplierDashboard />
                  </ProtectedRoute>
                } />
                <Route path="/supplier/products" element={
                  <ProtectedRoute>
                    <SupplierProducts />
                  </ProtectedRoute>
                } />
                <Route path="/supplier/orders" element={
                  <ProtectedRoute>
                    <Orders />
                  </ProtectedRoute>
                } />
                <Route path="/supplier/analytics" element={
                  <ProtectedRoute>
                    <SupplierDashboard />
                  </ProtectedRoute>
                } />
              </Routes>
            </main>
            <Footer />
          </div>
        </TooltipProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
