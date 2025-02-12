import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface Breadcrumb {
  label: string;
  onPress?: () => void;
}

interface Props {
  title?: string;
  breadcrumbs?: Breadcrumb[];
  showLogo?: boolean;
}

export default function Header({ title = "", breadcrumbs = [], showLogo = true }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <View style={[styles.titlesContainer,showLogo ? styles.spaceLogo : ""]}>
          {breadcrumbs.length > 0 ? (
            breadcrumbs.map((breadcrumb, index) => (
              <React.Fragment  key={index}>
                <TouchableOpacity onPress={breadcrumb.onPress}>
                  <Text style={styles.navItem}>{breadcrumb.label}</Text>
                </TouchableOpacity>
                {index < breadcrumbs.length - 1 && <Text style={styles.navSeparator}>/</Text>}
              </React.Fragment>
            ))
          ) : (
            <Text style={styles.title}>{title}</Text>
          )}
        </View>
      </View>
      {showLogo && (
        <View style={styles.logoContainer}>
          <Image
            resizeMode="cover"
            style={styles.logo}
            source={require("../../assets/images/logo.jpg")}
          />
        </View>
      )}
    </View>
  );
}
