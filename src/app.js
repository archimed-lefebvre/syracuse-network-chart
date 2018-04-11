// import axios from "axios";

// const scopes = axios.create({
//   baseURL: "http://localhost:3000/scopes"
// });

import style from "./app.css";

function errorHandler(err) {
  console.error(err.data);
  throw err;
}

function nodeTempate(data) {
  var tpl = '<div style="display:table" class="content">';

  if (data.ScopeType != 0 || !data.UseForFront) {
    tpl += '<div style="display:table-cell">' + data.Description + "</div>";
  }

  if (data.UseForFront) {
    tpl += '<div class="portal" style="display:table-cell; width: 20px">';

    if (data.ScopeType == 0) {
      tpl += data.Description;
    }

    tpl += "</div > ";
  }

  tpl += "</div>";

  return tpl;
}

fetch("db.json")
  .then(r => r.json())
  .then(json => {
    var chartOptions = {
      pan: true,
      zoom: true,
      nodeTemplate: nodeTempate,
      verticalLevel: 0,
      data: {
        Description: "Direction Départementale du Livre et du Multimédia",
        className: "root",
        children: json.scopes
      },
      nodeId: "Name",
      nodeContent: "Description",
      createNode: function($nodeEl, data) {
        $nodeEl.data("scope", data);
      }
    };

    $("#network-chart-content").orgchart(chartOptions);
  })
  .catch(errorHandler);
