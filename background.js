browser.contextMenus.create({
    id: "open-as-src",
    title: "Open as source",
    contexts: ["link"],
});
browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "open-as-src") {
        browser.tabs.create({url: "view-source:"+info.linkUrl});
    }
});
