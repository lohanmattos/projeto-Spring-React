import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

const dashboard = () => {
    return (
        <>
        <NavBar />
        <div className="container">
          <h1 className="text-primary py-3">Dashboad de Vendas</h1>
          <div className="row px-3">
            <div className="col sm-6">
            <h5 className="text-center text-secondary">Taxa de Sucesso (%)</h5>
               <BarChart/>
            </div>
            <div className="col sm-6">
              <h5 className="text-center text-secondary">Total de Vendas</h5>
               <DonutChart/>
            </div>
          </div>
          <div>
              <h2 className="text-primary">Total de Vendas</h2>
          </div>
          <DataTable/>
        </div> 
        <Footer/>
        </>
    );
}

export default dashboard;
