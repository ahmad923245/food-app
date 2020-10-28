import * as React from "react";
import { View, Text, StatusBar, Image, Dimensions } from "react-native";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const scr = {
  height: Dimensions.get("window").height,
  width: Dimensions.get("window").width
};

const colors = {
  themeColor: "#24685B",
  white: "#fff",
  greyish: "#a4a4a4"
};

const skillIcons = [
  "language-html5",
  "language-css3",
  "language-javascript",
  "language-php",
  "language-python"
];

const projects = [
  {
    name: "Dew Rainmeter",
    icon: "airballoon"
  },
  {
    name: "Yula Assistant",
    icon: "microphone"
  },
  {
    name: "Bucket Trace",
    icon: "shopping-music"
  }
];

export default function PortFolio(props) {
  return (
    <ScrollView
      style={{
        flex: 1
      }}
    >
      <StatusBar barStyle="light-content" backgroundColor={colors.themeColor} />
      <View
        style={{
          backgroundColor: colors.themeColor,
          paddingBottom: scr.height * 0.2,
          borderBottomLeftRadius: scr.width * 0.1,
          borderBottomRightRadius: scr.width * 0.1
        }}
      >
        <View
          style={{
            paddingHorizontal: 32,
            alignItems: "flex-end",
            marginVertical: 20
          }}
        >
          <SimpleLineIcons
            name="equalizer"
            size={20}
            style={{ color: colors.white }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 32,
            marginVertical: 36,
            alignItems: "center",
            justifyContent: "flex-start"
          }}
        >
          {/* <Image
            style={{ width: 50, height: 50, borderRadius: 25, marginRight: 16 }}
            source={require("./assets/images/user.png")}
          /> */}
          <View>
            <Text style={{ fontSize: 20, color: colors.white }}>
              Wanderson Aldo
            </Text>
            <Text style={{ color: colors.white }}>React Native Developer</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          backgroundColor: colors.white,
          marginHorizontal: 32,
          padding: 20,
          borderRadius: 20,
          marginTop: -scr.height * 0.15,
          elevation: 8,
          marginBottom: 16
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 8
          }}
        >
          <Text style={{ fontSize: 20 }}>Bio</Text>
          <AntDesign name="user" size={20} style={{}} />
        </View>
        <View style={{ marginVertical: 8 }}>
          <Text style={{ color: colors.greyish }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            voluptate deleniti itaque suscipit assumenda nobis explicabo neque
            ad delectus nisi!
          </Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: colors.white,
          marginHorizontal: 32,
          padding: 20,
          borderRadius: 20,
          elevation: 32,
          marginBottom: 16
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 8
          }}
        >
          <Text style={{ fontSize: 20 }}>Skills</Text>
          <MaterialCommunityIcons name="pen" size={20} style={{}} />
        </View>
        <ScrollView horizontal style={{ marginVertical: 8 }}>
          {skillIcons.map(skill => (
            <View
              key={skill}
              style={{
                width: 48,
                height: 48,
                borderWidth: 2,
                borderRadius: 24,
                padding: 5,
                borderColor: colors.themeColor,
                marginHorizontal: 5,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <MaterialCommunityIcons
                name={skill}
                size={30}
                style={{
                  color: colors.themeColor
                }}
              />
            </View>
          ))}
        </ScrollView>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 24 }}
      >
        {projects.map(project => (
          <View
            style={{
              backgroundColor: colors.themeColor,
              marginHorizontal: 8,
              padding: 20,
              borderRadius: 16,
              marginBottom: 16,
              alignItems: "center",
              width: scr.width * 0.7
            }}
          >
            <Text style={{ color: colors.white, fontSize: 20 }}>
              {project.name}
            </Text>
            <MaterialCommunityIcons
              name={project.icon}
              size={150}
              style={{ color: colors.white, marginVertical: 40 }}
            />
            <TouchableOpacity>
              <View style={{ backgroundColor: colors.white, borderRadius: 8 }}>
                <Text
                  style={{
                    color: colors.themeColor,
                    fontSize: 16,
                    padding: 8
                  }}
                >
                  View Project
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <View
        style={{
          backgroundColor: colors.white,
          marginHorizontal: 32,
          padding: 20,
          borderRadius: 20,
          elevation: 32,
          marginBottom: 16
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 8
          }}
        >
          <Text style={{ fontSize: 20 }}>Stats</Text>
          <MaterialCommunityIcons name="trending-up" size={20} style={{}} />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 8,
            alignItems: "flex-end"
          }}
        >
          <Text style={{ fontSize: 50, color: colors.themeColor }}>100</Text>
          <Text style={{ color: colors.greyish }}> CUPS OF COFEE</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 8,
            alignItems: "flex-end"
          }}
        >
          <Text style={{ color: colors.greyish }}>PROJECTS DONE </Text>
          <Text style={{ fontSize: 50, color: colors.themeColor }}>241</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 8,
            alignItems: "flex-end"
          }}
        >
          <Text style={{ fontSize: 50, color: colors.themeColor }}>420</Text>
          <Text style={{ color: colors.greyish }}> HAPPY CLIENTS</Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: colors.white,
          marginHorizontal: 32,
          padding: 20,
          borderRadius: 20,
          elevation: 32,
          marginBottom: 16
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 8
          }}
        >
          <Text style={{ fontSize: 20 }}>Connect With Me</Text>
          {/* <MaterialCommunityIcons name="pen" size={20} style={{}} /> */}
        </View>
        <ScrollView horizontal style={{ marginVertical: 8 }}>
          <MaterialCommunityIcons
            name="facebook"
            size={30}
            style={{
              color: colors.themeColor,
              borderRadius: 5,
              marginRight: 5
            }}
          />
          <MaterialCommunityIcons
            name="twitter"
            size={30}
            style={{
              color: colors.themeColor,
              borderRadius: 5,
              marginRight: 5
            }}
          />
          <MaterialCommunityIcons
            name="instagram"
            size={30}
            style={{
              color: colors.themeColor,
              borderRadius: 5,
              marginRight: 5
            }}
          />
        </ScrollView>
      </View>
    </ScrollView>
  );
}