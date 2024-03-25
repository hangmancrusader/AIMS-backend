class SecuritySolution {
    constructor({
      id,
      product_name,
      vendor,
      subscriptionID,
      license_expiry_date,
      current_version,
      last_updated,
      deployement_method,
      policy_settings,
      exclusion_list,
      logging_config,
      even_log_storage_location,
      scan_frequency,
      scan_time,
      scan_custom_config,
      integration_SEM,
      integration_EP_management,
      threat_feeds,
      ioc_management,
      vendor_contact,
      documentation_links,
      purchase_date,
      cost
    }) {
      this.id = id;
      this.product_name = product_name;
      this.vendor = vendor;
      this.subscriptionID = subscriptionID;
      this.license_expiry_date = license_expiry_date;
      this.current_version = current_version;
      this.last_updated = last_updated;
      this.deployement_method = deployement_method;
      this.policy_settings = policy_settings;
      this.exclusion_list = exclusion_list;
      this.logging_config = logging_config;
      this.even_log_storage_location = even_log_storage_location;
      this.scan_frequency = scan_frequency;
      this.scan_time = scan_time;
      this.scan_custom_config = scan_custom_config;
      this.integration_SEM = integration_SEM;
      this.integration_EP_management = integration_EP_management;
      this.threat_feeds = threat_feeds;
      this.ioc_management = ioc_management;
      this.vendor_contact = vendor_contact;
      this.documentation_links = documentation_links;
      this.purchase_date = purchase_date;
      this.cost = cost;
    }
  
    // Getters and setters can be added as needed
  }
  
  module.exports = SecuritySolution;
  