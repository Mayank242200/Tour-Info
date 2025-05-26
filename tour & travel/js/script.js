function search() {
    var query = document.getElementById("searchQuery").value.toLowerCase();
    if (query.includes("manali")) {
      window.location.href = "#manali";
    } else if (query.includes("jaipur")) {
      window.location.href = "#jaipur";
    } else if (query.includes("kochi")) {
      window.location.href = "#kochi";
    } else if (query.includes("sikkim")) {
      window.location.href = "#sikkim";
    } else if (query.includes("goa")) {
      window.location.href = "#goa";
    }
    
  }