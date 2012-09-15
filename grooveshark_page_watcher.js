/**
 * Copyright 2011 Kurtis L. Nusbaum
 *
 * This file is part of UDJ.
 *
 * UDJ is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * UDJ is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with UDJ.  If not, see <http://www.gnu.org/licenses/>.
 */

// Called when the url of a tab changes.
function checkForValidUrl(tabId, changeInfo, tab) {
  // If the tabs url starts with "http://specificsite.com"...
  if (tab.url.indexOf('http://grooveshark.com') ==0) {
  // ... show the page action.
    chrome.pageAction.show(tabId);
  }
  if (tab.url.indexOf('https://grooveshark.com') ==0) {
  // ... show the page action.
    chrome.pageAction.show(tabId);
  }
  if (tab.url.indexOf('http://www.grooveshark.com') ==0) {
  // ... show the page action.
    chrome.pageAction.show(tabId);
  }
  if (tab.url.indexOf('https://www.grooveshark.com') ==0) {
  // ... show the page action.
    chrome.pageAction.show(tabId);
  }
};

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);
