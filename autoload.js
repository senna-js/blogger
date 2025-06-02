(function () {
  const urls = [
    "https://www.profitableratecpm.com/fcuek3g0?key=3dffab1790c7500a7eb02aac2c422557",
    "https://www.profitableratecpm.com/en6ttq0s?key=b3c9812dedf31cf5a93e9c1e6ae1ac19",
    "https://www.profitableratecpm.com/u684swqd?key=e8df5c16ee4be9f3b59208931795fbf6"
    "https://www.profitableratecpm.com/aemwz4t7ak?key=8414c3e3ecf9d966d93de80439e2482c",
    "https://www.profitableratecpm.com/pq9mz1eqi?key=dd9cbdbce0636cee77e1dcd8f029be90",
  ];

  let index = 0;

  function openNextTab() {
    const url = urls[index];
    window.open(url, '_blank');
    console.log(`Opened: ${url}`);
    index = (index + 1) % urls.length;
  }

  window.onload = () => {
    openNextTab();  
    setInterval(openNextTab, 10000);  
  };
})();
