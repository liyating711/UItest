require('chromedriver'); //导入chrome浏览器 driver

var webdriver = require('selenium-webdriver'); //导入selenium 库

var driver = new webdriver.Builder().forBrowser('chrome').build(); //创建一个chrome 浏览器实例

driver.get("https://autowebtest.github.io/") //打开https://autowebtest.github.io/

driver.sleep(20 * 1000).then(function(){ //等待20秒
driver.quit(); //关闭浏览器
})
